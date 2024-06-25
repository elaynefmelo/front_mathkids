import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { LinearGradient } from "expo-linear-gradient"
 
interface ButtonProps {
    textobotao: string;
    pressione: () => void;
}

const ButtonAcess: React.FC<ButtonProps>= ({ textobotao, pressione}) => {
    return (
        <TouchableOpacity style={[styles.button]} onPress={pressione}>
            <LinearGradient
                colors={["#57E447", "#307E27"]}   
                style={styles.gradiente}          
            />
            <Text style={styles.buttonText}> {textobotao} </Text>    
       </TouchableOpacity>
    )
}

export default ButtonAcess 