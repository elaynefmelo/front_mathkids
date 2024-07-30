import { StyleSheet } from "react-native";
import { theme } from "@/src/thema";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: theme.colors.gray_8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    conteinerSec:{
        width: '100%',
        paddingVertical: 20,
        margin: '10%',
        marginTop:'25%',
    },
    imageV:{
        width:40,
        height:40,
        padding:8,
    },
    progreEta:{
        padding: 10,
        margin: 15,
        width: '95%',
        height: 60,
        borderRadius: 15,
        borderColor: 'gray',
        borderWidth: 1,
    },
    barContainer: {
        flexDirection:'row',
        justifyContent: 'space-evenly'
        // Garante que o conteúdo dentro do container não ultrapasse os limites definidos
    },  
    texto:{
        margin: 10,
        fontSize:16,

    },
    textoT:{
        margin: 15,
        fontSize: 22,
        color: '#7600B5',
    },
    textoP:{
        margin: 10,
        fontSize:16,
        color: '#7600B5',
    },

})