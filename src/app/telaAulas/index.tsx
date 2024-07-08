import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';
import BlocoNiveis from "@/src/components/BlocoNiveis";

const TelaAulas = () => {
    return (
        <View style={styles.container }>
            <Header
                title="Aulas"
                iconSource={require('@/src/assets/Maths.png')}
            />
            <View style={{ marginTop: -130 }}>
                <BlocoNiveis 
                    title={"Introdução"} 
                    iconSource={require('@/src/assets/Egg.png')} 
                />
            </View>
            <BlocoNiveis 
                title={"Nível Básico"} 
                iconSource={require('@/src/assets/Dinosaur.png')} 
            />
            <Menu />
        </View>
    );
}

export default TelaAulas;
