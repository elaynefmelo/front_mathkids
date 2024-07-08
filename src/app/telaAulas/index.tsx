import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";

const TelaAulas = () => {
    return (
        <View style={styles.container}>
            <Text>Aulas</Text>
            <Menu />
        </View>
    );
}

export default TelaAulas;
