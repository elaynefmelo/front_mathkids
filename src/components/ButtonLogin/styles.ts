import { StyleSheet } from "react-native"

import { theme } from "@/src/thema"


export const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: theme.colors.purple_p,
        width: 370, 
        height: 60,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20, 
        marginBottom: 3,
        borderWidth: 0.6,
        borderColor: theme.colors.border,
        overflow: 'hidden', 
        elevation: 8,

    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.fonts.size.heading.lg,
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