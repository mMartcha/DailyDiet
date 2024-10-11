import { ColorValue, DimensionValue, Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import Feather from '@expo/vector-icons/Feather';

type Props = PressableProps & {
    porcentage: any
    subTitle:string
    background: ColorValue | undefined
    width: DimensionValue | undefined
    iconColor: string
}

export function Highlight({porcentage,subTitle, background,width, iconColor, onPress}:Props){
    return(
    <Pressable onPress={onPress}style={[styles.container, {backgroundColor:background, width: width}]}>   
        <View style={{flex:1,alignItems:'center',position:'absolute'}}>
            <Text style={{fontWeight:'bold', fontSize:30}}>{porcentage}%</Text>
            <Text>{subTitle}</Text>
        </View>
        <View>
            <Feather name="arrow-up-right" size={24} color={iconColor} style={{left:160, bottom:30}}/>
        </View>
    </Pressable>
    )
        
}