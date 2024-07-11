import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";
import Menu from '@/src/components/Menu';
import Header from '@/src/components/Header';


const Pratica = () => {
  return (
    <View style={styles.container}>
       <Header
          title="Revisão"
          iconSource={require('@/src/assets/Idea.png')}
        />
     <Menu />
    </View>
  );
};


export default Pratica;