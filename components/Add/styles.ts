import { NunitoSans_200ExtraLight, NunitoSans_400Regular, NunitoSans_900Black } from "@expo-google-fonts/nunito-sans";
import { StyleSheet } from "react-native";
import Fonts from "../FontCode";

export const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#333638',
        height:50,
        width:'90%',
        alignSelf:'center',
        borderRadius:8,
        justifyContent:'center',
        
    },
    text:{
        textAlign: 'center',
        fontFamily:'NunitoSans_700Bold' 
    }
})