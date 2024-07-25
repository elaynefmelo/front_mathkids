// src/components/VideoComponent.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

interface VideoComponentProps {
  moduleId: number;
}

interface ModuleData {
  id: number;
  moduleTitle: string;
  videoTitle: string;
  videoUrl: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ moduleId }) => {
  const [moduleData, setModuleData] = useState<ModuleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModuleData = async () => {
      try {
        const response = await fetch('https://mathkids-server.onrender.com/modules');
        const data = await response.json();
        const module = data.modules.find((mod: ModuleData) => mod.id === moduleId);
        setModuleData(module);
      } catch (error) {
        console.error('Erro ao buscar dados do módulo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchModuleData();
  }, [moduleId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!moduleData) {
    return <Text>Módulo não encontrado</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.moduleTitle}>{moduleData.moduleTitle} - {moduleData.videoTitle}</Text>
      <TouchableOpacity style={styles.thumbnailContainer}>
        <Image
          source={{ uri: moduleData.thumbnailUrl }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  thumbnailContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 300,
    height: 200,
  },
});

export default VideoComponent;
