import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { styles } from "./styles"; 
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import ButtonAcess from '@/src/components/ButtonAcess';
import axios from 'axios';
import PopUp from '../avisos/avisos'; 
import { AppConfig } from "@/src/config/config";

type User = {
    id: number;
    name: string;
    email: string;
    userType: string;
    password: string;
};

export default function TelaConfig() {
    const [userData, setUserData] = useState<User | null>(null); 
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState({ title: '', subtitle: '' });

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await AsyncStorage.getItem('userData');
            if (data) {
                const parsedData = JSON.parse(data);
                setUserData(parsedData);
                setName(parsedData.name);
                setSenha(parsedData.password || ''); 
            }
        };
        fetchUserData();
    }, []);

    const handleSave = async () => {
        if (!name.trim()) {
            setPopUpMessage({ title: 'Erro!', subtitle: 'O nome não pode estar vazio.' });
            setIsPopUpVisible(true);
            return;
        }

       
        if (senha && senha.trim() === '') {
            setPopUpMessage({ title: 'Erro!', subtitle: 'A senha não pode estar vazia.' });
            setIsPopUpVisible(true);
            return;
        }

        if (userData) {
            try {
                
                await axios.put(`${AppConfig.baseUrl}/update-user/${userData.id}`, {
                    name,
                    email: userData.email
                });

               
                if (senha) {
                    await axios.put(`${AppConfig.baseUrl}/configuration-password/${userData.id}`, {
                        newPassword: senha,
                        passwordConfirm: senha 
                    });
                }

               
                const updatedData = { ...userData, name, password: senha }; 
                await AsyncStorage.setItem('userData', JSON.stringify(updatedData));

             
                setPopUpMessage({ title: 'Sucesso!', subtitle: 'Dados salvos com sucesso.' });
                setIsPopUpVisible(true);

            } catch (error) {
                console.error("Erro ao salvar dados:", error);
                
                setPopUpMessage({ title: 'Erro!', subtitle: 'Não foi possível salvar os dados.' });
                setIsPopUpVisible(true);
            }
        }
    };

    const handleClosePopUp = () => {
        setIsPopUpVisible(false);
    };

    return (
        <View style={styles.container}>
            <Header
                title="Configurações"
                iconSource={require('../../assets/Gear.png')}
            />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {userData && (
                    <View style={styles.profileSection}>
                        <TouchableOpacity style={styles.avatarContainer}>
                            <Image
                                source={require('../../assets/Dinosauro.png')} 
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                        <Text style={styles.userName}>{userData.name}</Text>
                    </View>
                )}
                <View style={styles.optionContainer}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Image
                            source={require('../../assets/Friend request.png')} 
                            style={styles.optionIcon}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Nome"
                            value={name}
                            onChangeText={setName}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Image
                            source={require('../../assets/Secure.png')} 
                            style={styles.optionIcon}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </TouchableOpacity>
                </View>
                <ButtonAcess textobotao='Salvar' pressione={handleSave} />
            </ScrollView>
            <Menu />
            <PopUp
                isVisible={isPopUpVisible}
                onClose={handleClosePopUp}
                title={popUpMessage.title}
                subtitle={popUpMessage.subtitle}
                imageSource={require('../../assets/Surprise.png')}
                buttonText="OK"
            />
        </View>
    );
}