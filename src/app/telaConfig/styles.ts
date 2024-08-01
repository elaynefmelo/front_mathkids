import { StyleSheet } from "react-native";
import { theme } from "@/src/thema";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: theme.colors.gray_8,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: theme.colors.purple_p, 
    },
    changeAvatarText: {
        marginTop: 10,
        color: theme.colors.gray_3,
        textDecorationLine: 'underline',
    },
    userName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.purple_p,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: theme.colors.gray_4, 
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: theme.colors.white,
        width: '55%', 
    },
    optionIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    optionText: {
        fontSize: 16,
        color: theme.colors.gray_3,
    },
});
