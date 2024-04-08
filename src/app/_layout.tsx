import { Slot } from "expo-router";

import {
    useFonts,
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_600SemiBold

} from "@expo-google-fonts/nunito-sans"

export default function Layout(){
    const [fontsLoaded] = useFonts ({
        NunitoSans_400Regular,
        NunitoSans_700Bold,
        NunitoSans_600SemiBold
    })

    if(!fontsLoaded){
        return
    }

    return fontsLoaded ? <Slot /> : null
}