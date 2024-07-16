import React from 'react';
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

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 140, 
        left: 10, 
        zIndex: 1, 
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'transparent', 
    },
    icon: {
        width: 50, 
        height: 50, 
        marginRight: 8,
    },
    text: {
        fontSize: 20,
        color: '#800080', // Ou qualquer cor desejada
        fontWeight: 'bold',
    },
});

export default BackButton;