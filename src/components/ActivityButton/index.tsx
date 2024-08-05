import { styles } from './styles';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface ActivityButtonProps {
  iconSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  status: 'notStarted' | 'inProgress' | 'completed';
  route: string;
  color?: string; // Propriedade color opcional
}

const ActivityButton: React.FC<ActivityButtonProps> = ({ iconSource, title, subtitle, status, route, color }) => {
  const router = useRouter();

  const getStatusStyles = () => {
    switch (status) {
      case 'notStarted':
        return styles.notStarted;
      case 'inProgress':
        return styles.inProgress;
      case 'completed':
        return styles.completed;
      default:
        return styles.notStarted;
    }
  };

  const handlePress = () => {
    router.push(route as any); // Usando 'as any' para contornar o erro de tipo
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <View style={[styles.circle, getStatusStyles(), color ? { backgroundColor: color } : {}]}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default ActivityButton;
