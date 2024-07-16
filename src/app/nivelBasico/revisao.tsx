import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';


const Pratica = () => {
  return (
    <View style={styles.container}>
       <Header
          title="Revisão"
          iconSource={require('@/src/assets/Idea.png')}
        />
        <BackButton />
    </View>
  );
};


export default Pratica;