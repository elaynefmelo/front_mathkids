import { theme } from '@/src/thema';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.purple_p, 
      padding: 20,
      margin: 15,
      borderRadius: theme.borderRadius.md, 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2, 
      width: screenWidth - 50, 
      marginHorizontal: 10, 
     
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme.colors.white, 
      textAlign: "center"
      
    },
  });
  