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
    optionContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: theme.colors.gray_4, 
        borderRadius: 20,
        backgroundColor: theme.colors.white,
        width: '90%', 
        justifyContent: 'center',
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
    balloon: {
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.gray_4,
        marginVertical: 5,
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: theme.colors.gray_4,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.white,
        flex: 1,
    },
    eyeButton: {
        position: 'absolute',
        right: 10,
    },
    eyeIcon: {
        width: 24,
        height: 24,
    },
    saveButton: {
        backgroundColor: theme.colors.green_p,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        marginVertical: 20,
    },
    saveButtonText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
