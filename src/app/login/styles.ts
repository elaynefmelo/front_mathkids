import { StyleSheet } from "react-native";
import { theme } from "@/src/thema";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.purple_p,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    containerLogo: {
        flex: 1,
        justifyContent: 'center',

    },

    logo: {
        width: 180, 
        height: 280, 
        resizeMode: 'contain', 
        marginTop: 50,
        //marginBottom: -50,
    },
    containerConteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginBottom: 40,
        
    },
    input: {
        backgroundColor: theme.colors.white,
        width: '90%',
        height: 40,
        fontFamily: theme.fonts.family.regular,
        marginBottom: 15,
        padding: 10,
        color: theme.colors.gray_3,
        fontSize: theme.fonts.size.body.md,
        borderRadius: 10,
    },
    recuperarSenha: {
        marginLeft: 'auto',
        paddingRight: 10,
       
    },
    textoSenha: {
        paddingRight: 10,
        textAlign: 'right',
        color: theme.colors.white,
        fontFamily: theme.fonts.family.semiBold,
        fontSize: theme.fonts.size.body.sm,
        textDecorationLine: 'underline'
    },
    textoAcesso: {
        marginTop:5,
        color: theme.colors.white,
        fontFamily: theme.fonts.family.semiBold,
        fontSize: theme.fonts.size.body.md,
    }
})