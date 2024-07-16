import React from 'react';
import { View, Text, StyleSheet, GestureResponderEvent, Alert } from 'react-native';
import { styles } from "./styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import VerifyButton from '@/src/components/VerifyButton';

const Video = () => {

  const handleVerifyPress = () => {
    Alert.alert('Verificado!', 'Você acertou a resposta.');
  };
  
  return (
    <View style={styles.container}>
      <Header
          title="Vídeo"
          iconSource={require('@/src/assets/Video.png')}
        />
      <BackButton />
      <BlocoQuestoes title={'Vamos assistir um vídeo e aprender'} />
      <VerifyButton onPress={function (event: GestureResponderEvent): void {
        throw new Error('Function not implemented.');
      } }/>
    </View>
  );
};

export default Video;