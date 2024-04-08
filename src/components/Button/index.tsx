import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'


const Button = ({ textobotao, pressione}) => {
    return (
        <TouchableOpacity style={[styles.button]} onPress={pressione}>
            <Text style={styles.buttonText}> {textobotao} </Text>
       </TouchableOpacity>
    )
}

export default Button 