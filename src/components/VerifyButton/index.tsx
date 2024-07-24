import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

interface VerifyButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const VerifyButton: React.FC<VerifyButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Verificar</Text>
    </TouchableOpacity>
  );
};

export default VerifyButton;
