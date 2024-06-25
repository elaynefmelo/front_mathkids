import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform  } from "react-native";
import { styles } from "./styles";
import ButtonAcess from "@/src/components/ButtonAcess";
import ButtonGoogle from "@/src/components/ButtonGoogle";
import { router } from "expo-router";

export default function Login(){

    const irParaInicio = () => {
        router.navigate("/telaAulas/")
    }

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo}
                    source={require('../../assets/logo.png')}
                />  
            </View>

            <View style={styles.containerConteudo}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <TouchableOpacity style={styles.recuperarSenha}>
                    <Text style={styles.textoSenha}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <ButtonAcess textobotao='Entrar' pressione={irParaInicio}  />
                <Text style={styles.textoAcesso}>
                    Ou entre com o Google
                </Text>
               <ButtonGoogle pressione={irParaInicio} source={require('../../assets/google.png') } />  
                 
            </View>
        </KeyboardAvoidingView>
    )
}