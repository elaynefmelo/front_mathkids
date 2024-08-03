import React from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient"

interface ButtonCalcu {
    textobotao: string;
    pressione: () => void;
    style?: ViewStyle;
}

const ButtonC: React.FC<ButtonCalcu>= ({ textobotao, pressione, style }) => {
    return (
        <TouchableOpacity onPress={pressione} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{textobotao}</Text>
    </TouchableOpacity>
    )
}

export default ButtonC 