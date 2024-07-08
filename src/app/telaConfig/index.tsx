import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";

export default function TelaConfig() {

    return(
        <View style={styles.container} >
            <Text>
                Configurações
            </Text>
            <Menu />
            
        </View>
    )
}