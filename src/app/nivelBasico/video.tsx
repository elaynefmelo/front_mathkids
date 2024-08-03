import React from 'react';
import { View} from 'react-native';
import { styles } from "./styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import VideoScreen from '@/src/components/VideoComponent/VideoScreen';

const Video = () => {
  return (
    <View style={styles.container}>
      <Header
          title="Vídeo"
          iconSource={require('@/src/assets/Video.png')}
        />
      <BackButton />
      <View style={styles.contentContainer}>
        <BlocoQuestoes title={'Vamos assistir um vídeo e aprender!'} />
        <VideoScreen moduleId={2} />
      </View>
    </View>
  );
};

export default Video;