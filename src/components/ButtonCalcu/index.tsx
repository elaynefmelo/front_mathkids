import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient"

interface ButtonCalcu {
    textobotao: string;
    pressione: () => void;
}

const ButtonC: React.FC<ButtonCalcu>= ({ textobotao, pressione }) => {
    return (
        <TouchableOpacity style={[styles.button]} onPress={pressione}>
            <Text style={styles.buttonText}> {textobotao} </Text>    
       </TouchableOpacity>
    )
}

export default ButtonC 