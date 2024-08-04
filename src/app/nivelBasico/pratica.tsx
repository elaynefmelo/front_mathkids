import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from "../nivelIntroducao/styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import Button from "@/src/components/Button";
import { router } from "expo-router";
import ButtonC from '@/src/components/ButtonCalcu';
import PopUp from '../avisos/avisos';

type ButtonState = {
  '3': boolean;
  '4': boolean;
  '5': boolean;
  '6': boolean;
};

const Pratica = () => {
  const [isCorrectPopUpVisible, setIsCorrectPopUpVisible] = useState(false);
  const [isIncorrectPopUpVisible, setIsIncorrectPopUpVisible] = useState(false);
  const [buttonStates, setButtonStates] = useState<ButtonState>({
    '3': false,
    '4': false,
    '5': false,
    '6': false,
  });

  const handleButtonClick = (textobotao: keyof ButtonState) => {
    setButtonStates({
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      [textobotao]: true,
    });
  };

  const verificarResposta = () => {
    if (buttonStates['5']) {
      setIsCorrectPopUpVisible(true);
    } else {
      setIsIncorrectPopUpVisible(true);
    }
  };

  const handleClosePopUp = (p0: boolean) => {
    setIsCorrectPopUpVisible(false);
    setIsIncorrectPopUpVisible(false);
    router.navigate('/nivelBasico/pratica2'); // Navegar para a próxima página independentemente da resposta
  }

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
                <Text style={styles.textN}>1/2</Text>
            </View>
            <BlocoQuestoes title={'Qual número abaixo representaria cinco dinossauros?'} />
            <View style={styles.containerCal}>
              <View style={styles.buttonCalculo}>
                <ButtonC
                  textobotao='3'
                  pressione={() => handleButtonClick('3')}
                  style={{ backgroundColor: buttonStates['3'] ? 'green' : '#FFFF' }}
                />
                <ButtonC
                  textobotao='4'
                  pressione={() => handleButtonClick('4')}
                  style={{ backgroundColor: buttonStates['4'] ? 'green' : '#FFFF' }}
                />
              </View>
              <View style={styles.buttonCalculo}>
                <ButtonC
                  textobotao='5'
                  pressione={() => handleButtonClick('5')}
                  style={{ backgroundColor: buttonStates['5'] ? 'green' : '#FFFF' }}
                />
                <ButtonC
                  textobotao='6'
                  pressione={() => handleButtonClick('6')}
                  style={{ backgroundColor: buttonStates['6'] ? 'green' : '#FFFF' }}
                />
              </View>
            </View>
            <Button textobotao='Verificar' pressione={verificarResposta}  />
          </View>
        </ScrollView>
        <PopUp 
          isVisible={isCorrectPopUpVisible} 
          onClose={() => handleClosePopUp(true)} 
          title="Ótimo!"
          subtitle="Você foi muito bem"
          imageSource={require('../../assets/Kiss.png')} 
          buttonText="OK"
        />
        <PopUp 
          isVisible={isIncorrectPopUpVisible} 
          onClose={() => handleClosePopUp(false)} 
          title="Eita!"
          subtitle="Você não foi tão bem, mas vamos 
seguir tentando."
          imageSource={require('../../assets/Crying.png')} 
          buttonText="OK"
        />
    </View>
  );
};

export default Pratica;
