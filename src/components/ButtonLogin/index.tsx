import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { LinearGradient } from "expo-linear-gradient"
 

const ButtonLogin = ({ textobotao, pressione}) => {
    return (
        <TouchableOpacity style={[styles.button]} onPress={pressione}>
            <LinearGradient
                colors={["#7600B5", "#68089B"]}   
                style={styles.gradiente}          
            />
            <Text style={styles.buttonText}> {textobotao} </Text>    
       </TouchableOpacity>
    )
}

export default ButtonLogin 