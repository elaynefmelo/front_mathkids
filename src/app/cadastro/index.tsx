import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { styles } from './styles';
import ButtonAcess from '@/src/components/ButtonAcess';
import ButtonGoogle from '@/src/components/ButtonGoogle';
import PopUp from '../avisos/avisos';
import { router } from 'expo-router';
import { AppConfig } from '@/src/config/config';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState({ title: '', subtitle: '' });

    const handleCadastro = async () => {
        if (senha !== confirmarSenha) {
            setPopUpMessage({ title: "Senhas não coincidem", subtitle: "Tente novamente" });
            setIsPopUpVisible(true);
            return;
        }

        try {
            const response = await fetch(`${AppConfig.baseUrl}/create-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nome,
                    email: email,
                    password: senha,
                    passwordConfirm: confirmarSenha,
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setPopUpMessage({ title: "Cadastro realizado", subtitle: "Usuário criado com sucesso" });
                router.navigate("/login");
            } else {
                setPopUpMessage({ title: "Erro no cadastro", subtitle: data.message || "Tente novamente" });
            }
            setIsPopUpVisible(true);
        } catch (error) {
            setPopUpMessage({ title: "Erro no servidor", subtitle: "Não foi possível criar o usuário" });
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
                    placeholder="Nome"
                    autoCorrect={false}
                    onChangeText={(text) => setNome(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Criar senha"
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={(text) => setSenha(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={(text) => setConfirmarSenha(text)}
                />
                <ButtonAcess textobotao='Cadastrar' pressione={handleCadastro} />
                <Text style={styles.textoAcesso}>
                    Ou cadastre-se com o Google
                </Text>
                <ButtonGoogle pressione={handleCadastro} source={require('../../assets/google.png')} />
                <TouchableOpacity style={styles.entrar} onPress={() => {
                    setTimeout(() => {
                        setIsPopUpVisible(false);
                        router.navigate("/login");
                    }, 4000);
                }}>
                    <Text style={styles.textoEntrar}>Já possui conta? Entrar</Text>
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