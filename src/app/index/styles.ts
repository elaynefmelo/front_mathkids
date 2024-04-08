import { StyleSheet } from "react-native";
import { theme } from "@/src/thema";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: theme.fonts.size.heading.xl,
        lineHeight: 44,
        marginTop: 42,
        fontFamily: theme.fonts.family.bold,
        color: theme.colors.purple_p,
    },
})