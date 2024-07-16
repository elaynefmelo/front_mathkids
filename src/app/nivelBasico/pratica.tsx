import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";
import Menu from '@/src/components/Menu';
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';


const Pratica = () => {
  return (
    <View style={styles.container}>
       <Header
          title="Prática"
          iconSource={require('@/src/assets/Drawing.png')}
        />
        <BackButton />
        <BlocoQuestoes title={'Qual sinal usamos para fazer as somas?'} />
    </View>
  );
};


export default Pratica;