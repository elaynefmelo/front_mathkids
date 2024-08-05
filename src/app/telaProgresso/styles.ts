import { StyleSheet } from "react-native";
import { theme } from "@/src/thema";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    conteinerSec:{
        width: '100%',
        padding: 24,
        margin: '10%',
        marginTop:'35%',
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
        backgroundColor: '#FFFFFF',
    },
    barContainer: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },  
    texto:{
        margin: 10,
        fontSize:16,

    },
    textoT:{
        margin: 15,
        fontSize: 22,
        color: '#7600B5',
        textAlign: 'center',
    },
    textoP:{
        margin: 10,
        fontSize:16,
        color: '#7600B5',
    },

})