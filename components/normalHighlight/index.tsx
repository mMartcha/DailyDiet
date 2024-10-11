import { ColorValue, DimensionValue, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Feather from '@expo/vector-icons/Feather';
import { router } from "expo-router";

type Props ={
    background?: ColorValue | undefined
    width?: DimensionValue | undefined
    title?: any
    subTitle?: string
    isActive?: boolean
    iconColor?: string
}

export function NormalHighlight({background, width, subTitle, title, isActive, iconColor}:Props){
    return(
        <View style={[styles.container,{backgroundColor:background,width:width}]}>
            <Pressable onPress={router.back}>
                {isActive && <Feather name="arrow-left" size={28} color={iconColor} style={{right:160, top:10}} />}
            </Pressable>
            <Text style={{fontWeight:'bold', fontSize:30}}>{title}</Text>
            <Text>{subTitle}</Text>
        </View>
    )
}