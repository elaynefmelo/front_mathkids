import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { styles } from "./styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import Button from "@/src/components/Button";
import { router } from "expo-router";
import PopUp from '../avisos/avisos';

const Revisao = () => {
  const [isCorrectPopUpVisible, setIsCorrectPopUpVisible] = useState(false);
  const [isIncorrectPopUpVisible, setIsIncorrectPopUpVisible] = useState(false);
  const [value, setValue] = useState('');

  const verificarResposta = () => {
    if (value.trim() === '3') {
      setIsCorrectPopUpVisible(true);
    } else {
      setIsIncorrectPopUpVisible(true);
    }
  };

  const handleClosePopUp = () => {
    setIsCorrectPopUpVisible(false);
    setIsIncorrectPopUpVisible(false);
    router.navigate('/telaAulas/'); // Navegar para a próxima página após fechar qualquer pop-up
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
              <Text style={styles.textN}>2/2</Text>
          </View>
          <BlocoQuestoes title={'Qual a soma dos ratinhos?'} />
          <View style={styles.containerCal}>
            <View style={styles.soma}>
                <Image 
                    source={require('@/src/assets/somaRato.png')}
                    style={styles.somaI}
                />
            </View>
            <View style={styles.spacoT}>
              <TextInput
                  value={value}
                  onChangeText={text => setValue(text)}
                  maxLength={40}
                  multiline={true}
                  style={styles.praticaText} // Aplicação do estilo
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
