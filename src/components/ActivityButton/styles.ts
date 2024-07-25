import { theme } from '@/src/thema';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      margin: 10,
    },
    circle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 5,
    },
    icon: {
      width: 50,
      height: 50,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.purple_p,
    },
    subtitle: {
      fontSize: 12,
      color: theme.colors.gray_3,
      fontWeight: 'semibold',
    },
    notStarted: {
      backgroundColor: '#B9BBBC',
    },
    inProgress: {
      backgroundColor: theme.colors.blue_info,
    },
    completed: {
      backgroundColor: theme.colors.green_sucess,
    },
  });