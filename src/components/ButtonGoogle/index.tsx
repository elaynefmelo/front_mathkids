import React from 'react';
import { TouchableOpacity, Image,  } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient"
 

const ButtonGoogle = ({ pressione, source }) =>  {
    return (
        <TouchableOpacity style={[styles.button]} onPress={pressione}>
            <LinearGradient
                colors={["#7600B5", "#68089B"]}   
                style={styles.gradiente}          
            />
            <Image
                source={source}
                style={styles.image}
            />
       </TouchableOpacity>
    )
}

export default ButtonGoogle 