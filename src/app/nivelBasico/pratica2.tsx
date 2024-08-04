import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { styles } from "../nivelIntroducao/styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import { router } from "expo-router";
import PopUp from '../avisos/avisos';
import Button from '@/src/components/Button';

const Pratica2 = () => {
  const [isCorrectPopUpVisible, setIsCorrectPopUpVisible] = useState(false);
  const [isIncorrectPopUpVisible, setIsIncorrectPopUpVisible] = useState(false);
  const [value, setValue] = useState('');

  const verificarResposta = () => {
    if (value.trim() === '2') {
      setIsCorrectPopUpVisible(true);
    } else {
      setIsIncorrectPopUpVisible(true);
    }
  };

  const handleClosePopUp = () => {
    setIsCorrectPopUpVisible(false);
    setIsIncorrectPopUpVisible(false);
    router.navigate('/telaAulas'); // Navegar para a próxima página após fechar qualquer pop-up
  };

  return (
    <View style={styles.containerP}>
      <Header
        title="Prática"
        iconSource={require('@/src/assets/Drawing.png')}
      />
      <BackButton />
      <ScrollView style={styles.containerPraS}>
        <View style={styles.containerPra}>
          <View style={styles.navNum}>
              <Text style={styles.textN}>2/2</Text>
          </View>
          <BlocoQuestoes title={'Qual a soma dos ovinhos?'} />
          <View style={styles.containerCal}>
            <View style={styles.soma}>
                <Image 
                    source={require('@/src/assets/somaOvo.png')}
                    style={styles.somaI}
                />
            </View >
            <View style={styles.spacoT}>
              <TextInput
                  value={value}
                  onChangeText={text => setValue(text)}
                  maxLength={40}
                  style={styles.praticaText}
              />
            </View>
          </View>
          <Button textobotao='Verificar' pressione={verificarResposta}  />
        </View>
      </ScrollView>
      <PopUp 
          isVisible={isCorrectPopUpVisible} 
          onClose={handleClosePopUp} 
          title="Parabéns!!"
          subtitle="Você acertou todas as questões"
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

export default Pratica2;
