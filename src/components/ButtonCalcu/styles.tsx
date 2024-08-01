import { StyleSheet } from "react-native"

import { theme } from "@/src/thema"


export const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        width: 100, 
        height: 100,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20, 
        margin: 15,
        borderWidth: 0.4,
        borderColor: theme.colors.border,
        overflow: 'hidden', 
        elevation: 8,

    },
    buttonText: {
        color: '#7600B5',
        fontSize: 50,
        fontFamily: theme.fonts.family.bold,
    },
    gradiente: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
   
})