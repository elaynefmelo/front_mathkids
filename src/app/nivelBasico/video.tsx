import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';

const Video = () => {
  return (
    <View style={styles.container}>
      <Header
          title="Vídeo"
          iconSource={require('@/src/assets/Video.png')}
        />
      <BackButton />
    </View>
  );
};

export default Video;