import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";
import Menu from '@/src/components/Menu';
import Header from '@/src/components/Header';

const Video = () => {
  return (
    <View style={styles.container}>
      <Header
          title="Vídeo"
          iconSource={require('@/src/assets/Video.png')}
        />
      <Menu />
    </View>
  );
};

export default Video;