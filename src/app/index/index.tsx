import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Button from "@/src/components/Button";
import ButtonLogin from "@/src/components/ButtonLogin";
import { router } from "expo-router";
 

export default function Index(){
    const irParaCadastro = () => {
        router.navigate("/cadastro/")
    }
    const irParaLogin = () => {
        router.navigate("/login/")
    }
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Button textobotao='Criar conta' pressione={irParaCadastro}  />
            <ButtonLogin textobotao='Já possuo uma conta' pressione={irParaLogin}  />

        </View>
    )
}
