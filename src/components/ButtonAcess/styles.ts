import { StyleSheet } from "react-native"

import { theme } from "@/src/thema"


export const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.green_p,
        width: 100, 
        height: 45,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10, 
        marginBottom: 10,
        marginTop: 30,
        borderWidth: 0.4,
        borderColor: theme.colors.border,
        overflow: 'hidden', 
        elevation: 5,

    },
    buttonText: {
        color: theme.colors.purple_p,
        fontSize: theme.fonts.size.heading.md,
        fontFamily: theme.fonts.family.bold,
    },
    gradiente: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
   
})