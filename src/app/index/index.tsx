import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Button from "@/src/components/Button";

export default function Index(){
    const entrar = () => {
        alert('Cliquei')
    }
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Button textobotao='Entrar' pressione={entrar}  />
        </View>
    )
}
