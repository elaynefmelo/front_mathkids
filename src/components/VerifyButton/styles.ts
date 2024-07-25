import { StyleSheet } from 'react-native';
import { theme } from '@/src/thema';

export const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.green_p,
      paddingVertical: 15,
      paddingHorizontal: 60,
      borderRadius: 5,
      alignItems: 'center',
    },
    text: {
      color: theme.colors.purple_p,
      fontSize: 24,
      fontWeight: 'bold',
    },
  });