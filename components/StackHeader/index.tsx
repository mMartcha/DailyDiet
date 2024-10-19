import { ColorValue, Pressable, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./styles";

type Props ={
    backFunction: () => void
    title: string
    background?: ColorValue | undefined 

}

export function StackHeader({backFunction, title, background}:Props){
    return(
        <View style={[styles.container,{backgroundColor:background}]}>
            <Pressable 
            style={{flex:1}}
            onPress={backFunction}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <Text style={{fontSize:18,fontFamily:'NunitoSans_700Bold', position:'absolute'}} >{title}</Text>
        </View>
    )
}  