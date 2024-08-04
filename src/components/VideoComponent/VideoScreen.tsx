import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator, Alert, Text } from 'react-native';
import { VideoComponent } from './index';
import { styles } from './styles';
import PopUp from "@/src/app/avisos/avisos";
import ImageSource from "@/src/assets/Happy.png"; 
import { AppConfig } from '@/src/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [userId, setUserId] = useState<number | null>(null);  

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        const parsedData = JSON.parse(data);
        setUserId(parsedData.id);  
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (cache[moduleId]) {
        setVideoData(cache[moduleId]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${AppConfig.baseUrl}/modules`);
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

  const handleVideoEnd = useCallback(async () => {
    if (userId !== null) {
      try {
        const progressResponse = await fetch(`${AppConfig.baseUrl}/progress-user/${userId}`);
        const progressData = await progressResponse.json();

        if (progressData.progress) {
          const currentVideosWatchedCount = progressData.progress.videosWatched || 0;

          if (currentVideosWatchedCount < 3) {
            const newVideosWatchedCount = currentVideosWatchedCount + 1;

            await fetch(`${AppConfig.baseUrl}/update-videosWatched/${userId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                videosWatched: newVideosWatchedCount
              }),
            });

            setPopUpTitle('Parabéns, você finalizou o vídeo!');
            setPopUpImageSource(ImageSource); 
            setIsPopUpVisible(true);
          } else {
            setPopUpTitle('Você já assistiu todos os vídeos disponíveis.');
            setPopUpImageSource(ImageSource); 
            setIsPopUpVisible(true);
          }
        } else {
          Alert.alert('Erro', 'Não foi possível obter o progresso do usuário.');
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível atualizar o status do vídeo assistido.');
      }
    }
  }, [userId, videoData]);

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
