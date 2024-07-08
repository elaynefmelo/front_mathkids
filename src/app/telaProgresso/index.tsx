import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";

export default function TelaProgresso() {

    return(
        <View style={styles.container} >
            <Text>
               Progresso
            </Text>
            <Menu />
        </View>
    )
}