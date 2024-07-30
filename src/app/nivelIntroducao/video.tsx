import React from 'react';
import { View, Alert } from 'react-native';
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import { styles } from './styles';
import { VideoComponent } from '@/src/components/VideoComponent';

const Video = () => {

  return (
  
    <View style={styles.container}>
      <Header
        title="Vídeo"
        iconSource={require('@/src/assets/Video.png')} 
      />
      <BackButton />
      <View style={styles.contentContainer}>
        <BlocoQuestoes title={'Vamos assistir um vídeo e aprender'} />
        <VideoComponent/>
      </View>
     
      
    </View>
    
  );
};

export default Video;
