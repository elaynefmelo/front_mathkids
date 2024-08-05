import React, { useEffect, useState } from "react";
import { View, Text, Animated } from "react-native";
import { styles } from "./styles";
import { AppConfig } from '@/src/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Progresso() {
  const barWidth = React.useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);  

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const parsedData = JSON.parse(userData);
          const userId = parsedData.id;
          const response = await fetch(`${AppConfig.baseUrl}/progress-user/${userId}`);
          const data = await response.json();
          const progressData = data.progress;

          if (progressData) {
            const total = progressData.videosWatched + progressData.completedActivities + progressData.completedReviews;
            const totalPossible = 3 + 2 + 1; 
            const percentage = (total / totalPossible) * 100;

            setProgress(percentage);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar progresso:', error);
      }
    };

    fetchProgressData();
  }, []);

  useEffect(() => {
    Animated.spring(barWidth, {
      toValue: progress / 100, 
      bounciness: 10,
      speed: 2,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.barContainer}>
      <Text style={styles.text}>Progresso geral</Text>
      <View style={styles.caixaBar}>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarGray, { width: `${100 - progress}%` }]} />
          <Animated.View style={[styles.progressBar, { flex: barWidth }]} />
        </View>
        <Text style={styles.progressText}>{Math.round(progress)}%</Text>  
      </View>
    </View>
  );
}
