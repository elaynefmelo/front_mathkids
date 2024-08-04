import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { styles } from "../nivelBasico/styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import Button from "@/src/components/Button";
import { router } from "expo-router";
import PopUp from '../avisos/avisos';
import { AppConfig } from '@/src/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Revisao = () => {
  const [isCorrectPopUpVisible, setIsCorrectPopUpVisible] = useState(false);
  const [isIncorrectPopUpVisible, setIsIncorrectPopUpVisible] = useState(false);
  const [value, setValue] = useState('');
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        const parsedData = JSON.parse(data);
        setUserId(parsedData.id);  
      }
    };

    fetchUserData();
  }, []);

  const verificarResposta = async () => {
    // Verificar a resposta
    if (value.trim() === '3') {
      setIsCorrectPopUpVisible(true);
    } else {
      setIsIncorrectPopUpVisible(true);
    }

    if (userId !== null) {
      try {
        const response = await fetch(`${AppConfig.baseUrl}/progress-user/${userId}`);
        const progressData = await response.json();

        if (progressData.progress && progressData.progress.completedReviews !== 1) {
          const newCompletedReviews = (progressData.progress.completedReviews || 0) + 1;

          await fetch(`${AppConfig.baseUrl}/update-completedReviews/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              completedReviews: newCompletedReviews
            }),
          });
        }
      } catch (error) {
        console.error('Erro ao atualizar completedReviews:', error);
      }
    }
  };

  const handleClosePopUp = () => {
    setIsCorrectPopUpVisible(false);
    setIsIncorrectPopUpVisible(false);
    router.navigate('/telaAulas'); 
  };

  return (
    <View style={styles.containerP}>
      <Header
        title="Revisão"
        iconSource={require('@/src/assets/Idea.png')}
      />
      <BackButton />
      <ScrollView style={styles.containerPraS}>
        <View style={styles.containerPra}>
          <View style={styles.navNum}>
              <Text style={styles.textN}>1/1</Text>
          </View>
          <BlocoQuestoes title={'Qual a soma dos ratinhos?'} />
          <View style={styles.containerCal}>
            <View style={styles.soma}>
                <Image 
                    source={require('@/src/assets/somaRato.png')}
                    style={styles.somaI}
                />
            </View>
            <View style={styles.spacoT} >
              <TextInput
                  value={value}
                  onChangeText={text => setValue(text)}
                  maxLength={40}
                  multiline={true}
                  style={styles.praticaText} 
              />
            </View>
          </View>
          <Button textobotao='Verificar' pressione={verificarResposta} />
        </View>
      </ScrollView>
      <PopUp 
          isVisible={isCorrectPopUpVisible} 
          onClose={handleClosePopUp} 
          title="Parabéns!!"
          subtitle="Você acertou a resposta!"
          imageSource={require('../../assets/Kiss.png')} 
          buttonText="OK"
        />
      <PopUp 
          isVisible={isIncorrectPopUpVisible} 
          onClose={handleClosePopUp} 
          title="Oops!"
          subtitle="Resposta incorreta. Tente novamente."
          imageSource={require('../../assets/Crying.png')} 
          buttonText="OK"
        />
    </View>
  );
};

export default Revisao;
