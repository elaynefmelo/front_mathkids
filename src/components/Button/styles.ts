import { StyleSheet } from "react-native"

import { theme } from "@/src/thema"


export const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: theme.colors.green_p,
        width: 350, 
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20, 
        marginBottom: 3,
    },
    buttonText: {
        color: theme.colors.purple_p,
        fontSize: theme.fonts.size.body.md,
        fontFamily: theme.fonts.family.bold,
    }
})