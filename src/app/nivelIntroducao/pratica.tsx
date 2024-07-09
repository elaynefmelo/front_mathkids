import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";
import Menu from '@/src/components/Menu';
import Header from '@/src/components/Header';


const Pratica = () => {
  return (
    <View style={styles.container}>
       <Header
          title="Prática"
          iconSource={require('@/src/assets/Drawing.png')}
        />
     <Menu />
    </View>
  );
};


export default Pratica;