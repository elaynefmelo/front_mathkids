import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { styles } from "./styles";
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import BlocoQuestoes from '@/src/components/BlocoQuestoes';
import Button from "@/src/components/Button";
import { router } from "expo-router";
import ButtonC from '@/src/components/ButtonCalcu';


const Pratica2 = () => {

  const irParaPratica1 = () => {
    router.navigate('/telaAulas/')
  }
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <View style={styles.container}>
       <Header
          title="Prática"
          iconSource={require('@/src/assets/Drawing.png')}
        />
        <BackButton />
        <ScrollView style={styles.containerPraS}>
          <View style={styles.containerPra}>
            <View style={styles.navNum}>
                <Text style={styles.textN}>2/2</Text>
            </View>
            <BlocoQuestoes title={'Qual a soma dos ovinhos?'} />
            <View style={styles.containerCal}>
              <View style={styles.somaI}>
                  <Image 
                      source={require('@/src/assets/somaOvo.png')}
                      style={styles.somaI}
                  />
              </View >
              <View style={styles.spacoT}>
                <TextInput
                    value={value}
                    onChangeText={text => onChangeText(text)}
                    maxLength={40}
                    multiline={true}
                    style={styles.praticaText} // Aplicação do estilo
                />
              </View>
            </View>
            <Button textobotao='Verificar' pressione={irParaPratica1}  />
          </View>
        </ScrollView>
        
        
    </View>
  );
};


export default Pratica2;