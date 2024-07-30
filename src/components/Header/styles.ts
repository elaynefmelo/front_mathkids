import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { theme } from '@/src/thema';

export const styles = StyleSheet.create({
    container: {
      width: '100%', // Ajusta a largura dinamicamente
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 15 : 15, // Adiciona espaço para a barra de status
      paddingBottom: 10,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1, 
    },
    iconTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    },
    icon: {
      width: 30,
      height: 30,
    },
    title: {
      fontSize: theme.fonts.size.heading.lg,
      fontFamily: theme.fonts.family.bold,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme.colors.purple_p,
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 15,
    },
   
  });