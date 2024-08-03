import { theme } from "@/src/thema";
import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: '5%',
    justifyContent: 'center', 
    alignItems: 'center',

  },
  containerPra:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginBottom: '50%',
    marginTop: '5%',
  },
  containerPraS:{
    width: '100%',
    height: '100%',
    marginTop: '30%',
    marginBottom: '10%',
  },
  navNum:{
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '90%',
    height: 5,
    marginRight: '5%',
    marginBottom: '3%',
    marginTop: 0,
    borderColor: '#000'
  },
  textN:{
    fontSize: 15,
  },
  containerCal:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
  },
  buttonCalculo:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center'
  },
  praticaText:{
    width: 400,   // 95% da largura da tela
    height: '100%', // Altura fixa
    padding:'5%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    fontSize: 15,
  },
  spacoT:{
    width: '100%',
    height: '30%',
  },
  soma:{
    width: '60%',   
    height: '30%',
    padding:'5%',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: '10%',
  },
  somaI:{
    width: 350,   
    height: 100,
  },
});