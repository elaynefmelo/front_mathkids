import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';


export default function TelaConfig() {

    return(
        <View style={styles.container} >
            <Header
                title="Configurações"
                iconSource={require('@/src/assets/Gear.png')}
            />
            <Menu />
            
        </View>
    )
}