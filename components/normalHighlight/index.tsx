import { ColorValue, DimensionValue, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Feather from '@expo/vector-icons/Feather';
import { router } from "expo-router";
import { NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

type Props ={
    background?: ColorValue | undefined
    width?: DimensionValue | undefined
    title?: any
    subTitle?: string
    isActive?: boolean
    iconColor?: string
    paddingHorizontal?: number
}

export function NormalHighlight({background, width, subTitle, title, isActive, iconColor, }:Props){
    return(
        <View style={[styles.container,{backgroundColor:background,width:width, }]}>
            <Pressable onPress={router.back}>
                {isActive && <Feather name="arrow-left" size={28} color={iconColor} style={{right:160, top:10}} />}
            </Pressable>
            <Text style={{ fontSize:30, fontFamily: 'NunitoSans_700Bold'}}>{title}</Text>
            <Text style={{fontFamily:'NunitoSans_400Regular', fontSize:15, textAlign:'center'}}>{subTitle}</Text>
        </View>
    )
}