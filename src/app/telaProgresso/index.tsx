import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';
import Progresso from "@/src/components/Progresso";

export default function TelaProgresso() {

    return(
        <View style={styles.container} >
             <Header
                title="Progresso"
                iconSource={require('@/src/assets/Growth.png')}
            />
            <Progresso/>
            
            <Menu />
        </View>
    )
}