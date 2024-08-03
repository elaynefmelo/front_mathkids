import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from "@/src/thema";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white_2,
    paddingTop: 200,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start', 
  },
  text: {
    fontSize: 20,
  },
});
export default Video;