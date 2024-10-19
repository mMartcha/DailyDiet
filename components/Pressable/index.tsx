import { ColorValue, Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & { 
    background: ColorValue | undefined
    title: string
    ball?: boolean
    ballcolor?: string
    border?: string
}

export function PressableButton({background,title,ball, ballcolor, onPress, border}:Props){
    return(
        <Pressable onPress={onPress} style={[styles.container,{backgroundColor:background, borderColor: border}]}>

            {ball && <View style={{height:8,width:8,borderRadius:16,backgroundColor:ballcolor}}/>}
            <Text style={{fontFamily:'NunitoSans_700Bold'}}>{title}</Text>

        </Pressable>
    )
}