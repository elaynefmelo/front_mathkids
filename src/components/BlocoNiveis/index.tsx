import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';
import { styles } from './styles'

interface BlocoNiveisProps {
  title: string;
  iconSource: ImageSourcePropType; 
}

const BlocoNiveis: React.FC<BlocoNiveisProps> = ({ title, iconSource }) => {
  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BlocoNiveis;