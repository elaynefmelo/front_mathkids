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
  '=': boolean;
  'x': boolean;
  '+': boolean;
  '-': boolean;
};

const Pratica = () => {
  const [isCorrectPopUpVisible, setIsCorrectPopUpVisible] = useState(false);
  const [isIncorrectPopUpVisible, setIsIncorrectPopUpVisible] = useState(false);
  const [buttonStates, setButtonStates] = useState<ButtonState>({
    '=': false,
    'x': false,
    '+': false,
    '-': false,
  });

  const handleButtonClick = (textobotao: keyof ButtonState) => {
    setButtonStates({
      '=': false,
      'x': false,
      '+': false,
      '-': false,
      [textobotao]: true,
    });
  };

  const verificarResposta = () => {
    if (buttonStates['+']) {
      setIsCorrectPopUpVisible(true);
    } else {
      setIsIncorrectPopUpVisible(true);
    }
  };

  const handleClosePopUp = (p0: boolean) => {
    setIsCorrectPopUpVisible(false);
    setIsIncorrectPopUpVisible(false);
    router.navigate('/nivelBasico2/praticaB2'); 
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
            <BlocoQuestoes title={'Qual sinal usamos para fazer as somas?'} />
            <View style={styles.containerCal}>
              <View style={styles.buttonCalculo}>
                <ButtonC
                  textobotao='='
                  pressione={() => handleButtonClick('=')}
                  style={{ backgroundColor: buttonStates['='] ? 'green' : '#FFFF' }}
                />
                <ButtonC
                  textobotao='x'
                  pressione={() => handleButtonClick('x')}
                  style={{ backgroundColor: buttonStates['x'] ? 'green' : '#FFFF' }}
                />
              </View>
              <View style={styles.buttonCalculo}>
                <ButtonC
                  textobotao='+'
                  pressione={() => handleButtonClick('+')}
                  style={{ backgroundColor: buttonStates['+'] ? 'green' : '#FFFF' }}
                />
                <ButtonC
                  textobotao='-'
                  pressione={() => handleButtonClick('-')}
                  style={{ backgroundColor: buttonStates['-'] ? 'green' : '#FFFF' }}
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
