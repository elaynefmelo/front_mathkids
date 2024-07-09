import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';

export default function TelaProgresso() {

    return(
        <View style={styles.container} >
             <Header
                title="Progresso"
                iconSource={require('@/src/assets/Growth.png')}
            />
            <Menu />
        </View>
    )
}