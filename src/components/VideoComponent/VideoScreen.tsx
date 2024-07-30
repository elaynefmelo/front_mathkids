import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert, Text } from 'react-native';
import { VideoComponent } from './index';
import { styles } from './styles';

interface VideoScreenProps {
  moduleId: number;
}

const cache: any = {}; 

export default function VideoScreen({ moduleId }: VideoScreenProps) {
  const [videoData, setVideoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
      />
    </View>
  );
}
