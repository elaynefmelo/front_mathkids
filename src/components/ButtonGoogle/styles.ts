import { StyleSheet } from "react-native"

import { theme } from "@/src/thema"


export const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.green_p,
        width: 80, 
        height: 45,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10, 
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 0.3,
        borderColor: theme.colors.white,
        overflow: 'hidden', 
        elevation: 5,

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
    }, 

    image: {
        width: 28, 
        height: 28, 
    },
   
})