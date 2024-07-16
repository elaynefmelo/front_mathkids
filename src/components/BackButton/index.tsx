import React from 'react';
import { styles } from './styles'
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Image 
                    source={require('@/src/assets/Voltar.png')} // Certifique-se de que a imagem está no caminho correto
                    style={styles.icon}
                />
                <Text style={styles.text}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BackButton;