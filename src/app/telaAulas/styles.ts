import { StyleSheet } from "react-native";
import { theme } from "@/src/thema";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 24,
        backgroundColor: theme.colors.gray_8,
        paddingBottom: 10,
    
    },  
    scrollViewContent: {
        paddingTop: 80, 
        paddingBottom: 60, 
        alignItems: 'center',
    }, 
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        marginBottom: 20,
        width: '100%'
     },
})