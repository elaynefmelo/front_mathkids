import { theme } from "@/src/thema";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 180,
  },
  containerPra:{
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    margin: 10
  },
  navNum:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  containerCal:{
    margin:10,
    marginBottom: 20
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start', // Alinha os componentes no início do container
  },
  text: {
    fontSize: 20,
  },
  buttonCalculo:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center'
  }
});