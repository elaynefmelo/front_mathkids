import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { styles } from "./styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import Button from "@/src/components/Button";
import { router } from "expo-router";
import ButtonC from '@/src/components/ButtonCalcu';


const Pratica = () => {

  const irParaPratica2 = () => {
    router.navigate('/nivelIntroducao/pratica2')
  }
  return (
    <View style={styles.container}>
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
                <ButtonC textobotao='=' pressione={irParaPratica2} />
                <ButtonC textobotao='x' pressione={irParaPratica2} />
              </View>
              <View style={styles.buttonCalculo}>
                <ButtonC textobotao='+' pressione={irParaPratica2} />
                <ButtonC textobotao='-' pressione={irParaPratica2} />
              </View>
            </View>
            <Button textobotao='Verificar' pressione={irParaPratica2}  />
          </View>

        </ScrollView>
        
    </View>
  );
};


export default Pratica;