import { styles } from './styles'
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { useRouter } from 'expo-router';

interface ActivityButtonProps {
  iconSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  status: 'notStarted' | 'inProgress' | 'completed';
  route: string;
}

const ActivityButton: React.FC<ActivityButtonProps> = ({ iconSource, title, subtitle, status, route }) => {
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

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push(route)}>
      <View style={[styles.circle, getStatusStyles()]}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default ActivityButton;
