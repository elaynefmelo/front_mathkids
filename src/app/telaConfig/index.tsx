import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles"; 
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';


export default function TelaConfig() {
    return (
        <View style={styles.container}>
            <Header
                title="Configurações"
                iconSource={require('../../assets/Gear.png')}
            />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.profileSection}>
                    <TouchableOpacity style={styles.avatarContainer}>
                        <Image
                            source={require('../../assets/Dinosauro.png')} 
                            style={styles.avatar}
                        />
                        <Text style={styles.changeAvatarText}>Alterar avatar</Text>
                    </TouchableOpacity>
                    <Text style={styles.userName}>Alice Oliveira</Text>
                </View>
                <TouchableOpacity style={styles.optionButton}>
                    <Image
                        source={require('../../assets/Friend request.png')} 
                        style={styles.optionIcon}
                    />
                    <Text style={styles.optionText}>Alterar informações da conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Image
                        source={require('../../assets/Secure.png')} 
                        style={styles.optionIcon}
                    />
                    <Text style={styles.optionText}>Alterar senha</Text>
                </TouchableOpacity>
            </ScrollView>
            <Menu />

        </View>
    );
}
