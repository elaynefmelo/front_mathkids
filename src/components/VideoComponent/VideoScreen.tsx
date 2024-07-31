import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator, Alert, Text } from 'react-native';
import { VideoComponent } from './index';
import { styles } from './styles';
import PopUp from "@/src/app/avisos/avisos";
import ImageSource from "@/src/assets/Happy.png"; 

interface VideoScreenProps {
  moduleId: number;
}

const cache: any = {};

export default function VideoScreen({ moduleId }: VideoScreenProps) {
  const [videoData, setVideoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [popUpTitle, setPopUpTitle] = useState('');
  const [popUpSubtitle, setPopUpSubtitle] = useState('');
  const [popUpImageSource, setPopUpImageSource] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (cache[moduleId]) {
        setVideoData(cache[moduleId]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://mathkids-server.onrender.com/modules');
        const data = await response.json();
        const module = data.modules.find((mod: any) => mod.id === moduleId);
        if (module) {
          cache[moduleId] = module;
          setVideoData(module);
        } else {
          Alert.alert('Erro', 'Módulo não encontrado.');
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados do vídeo.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [moduleId]);

  const handleVideoEnd = useCallback(() => {
    setPopUpTitle('Parabéns, você finalizou o vídeo!');
    setPopUpImageSource(ImageSource); 
    setIsPopUpVisible(true); 
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#57E447" />;
  }

  if (!videoData) {
    return (
      <View style={styles.container}>
        <Text>Nenhum dado disponível.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <VideoComponent
        videoId={videoData.videoUrl}
        moduleName={videoData.moduleTitle}
        videoTitle={videoData.videoTitle}
        onVideoEnd={handleVideoEnd} 
      />
      <PopUp
        isVisible={isPopUpVisible}
        onClose={() => setIsPopUpVisible(false)}
        title={popUpTitle}
        subtitle={popUpSubtitle}
        imageSource={popUpImageSource}
        buttonText="Fechar"
      />
    </View>
  );
}
