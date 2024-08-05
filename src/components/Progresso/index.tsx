import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { styles } from "./styles";

export default function Progresso() {
  const barWidth = React.useRef(new Animated.Value(0)).current;
  const progress = 30; // Aqui você pode definir o progresso desejado, inicialmente 50%

  useEffect(() => {
    Animated.spring(barWidth, {
      toValue: progress / 100, // Use progress / 100 para ajustar o valor do flex
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
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    </View>
  );
}
