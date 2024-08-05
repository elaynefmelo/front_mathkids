import { theme } from "@/src/thema";
import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  containerP: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: '5%',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  containerPra:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '10%',

  },
  containerPraS:{
    width: '100%',
    height: '100%',
    margin:'10%',
    paddingTop:'20%',
    marginBottom: '10%',

  },
  navNum: {
    flex: 1,
    flexDirection: 'row-reverse', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '90%',
    height: '10%',
    marginTop: '10%',
  },
  textN:{
    fontSize: 20,
    color: 'gray',
  },
  containerCal:{
    padding: '5%',
    justifyContent: 'center', 
    alignItems: 'center',
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
    width: 300, 
    height: '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    fontSize: 15,
    flexWrap: 'wrap',
    padding: '2%',
  },
  spacoT:{
    width: '100%',
    height: '40%',
    padding:'5%',
  },
  soma:{
    width: '60%',   
    height: '30%',
    padding:'5%',
    alignItems: 'center',
    justifyContent:'center',
  },
  somaI:{
    width: 300,   
    height: 100,
    margin: '10%',
  },
});