import { theme } from "@/src/thema";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 140, 
        left: 10, 
        zIndex: 1, 
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'transparent', 
    },
    icon: {
        width: 50, 
        height: 50, 
        marginRight: 8,
    },
    text: {
        fontSize: 20,
        color: '#800080', // Ou qualquer cor desejada
        fontWeight: 'bold',
    },
});

