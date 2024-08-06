import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { styles } from './styles';
import ButtonAcess from '@/src/components/ButtonAcess';
import ButtonGoogle from '@/src/components/ButtonGoogle';
import PopUp from '../avisos/avisos'; 
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConfig } from '@/src/config/config';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState({ title: '', subtitle: '' });

    const handleLogin = async () => {
        try {
            const response = await fetch(`${AppConfig.baseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password: senha }),
            });

            const data = await response.json();

            if (response.status === 200) {
                await AsyncStorage.setItem('userData', JSON.stringify(data.user)); 
                setPopUpMessage({ title: "Login bem-sucedido", subtitle: "Você será redirecionado" });
                setIsPopUpVisible(true);
                setTimeout(() => {
                    setIsPopUpVisible(false);
                    router.navigate("/telaAulas");
                }, 2000);
            } else {
                setPopUpMessage({ title: "Email ou senha incorretos", subtitle: data.message || "Tente novamente" });
                setIsPopUpVisible(true);
            }
        } catch (error) {
            setPopUpMessage({ title: "Erro no servidor", subtitle: "Não foi possível realizar o login" });
            setIsPopUpVisible(true);
        }
    };

    const handleClosePopUp = () => {
        setIsPopUpVisible(false);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>

            <View style={styles.containerConteudo}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={(text) => setSenha(text)}
                />
                <TouchableOpacity style={styles.recuperarSenha}>
                    <Text style={styles.textoSenha}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <ButtonAcess textobotao='Entrar' pressione={handleLogin} />
                <Text style={styles.textoAcesso}>
                    Ou entre com o Google
                </Text>
                <ButtonGoogle pressione={handleLogin} source={require('../../assets/google.png')} />
                <TouchableOpacity style={styles.entrar} onPress={() => {
                    setTimeout(() => {
                        setIsPopUpVisible(false);
                        router.navigate("/cadastro");
                    }, 4000);
                }}>
                    <Text style={styles.textoEntrar}>Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>

            <PopUp 
                isVisible={isPopUpVisible} 
                onClose={handleClosePopUp} 
                title={popUpMessage.title}
                subtitle={popUpMessage.subtitle}
                imageSource={require('../../assets/Surprise.png')} 
                buttonText="OK"
            />
        </KeyboardAvoidingView>
    )
}