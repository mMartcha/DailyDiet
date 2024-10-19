import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

type Props = TextInputProps & {
    title: string
    height: number
    width?: number
}

export function Input({title, height, width, onChangeText, placeholder, keyboardType, textAlignVertical, multiline, value}:Props){
    return(
        <View style={styles.container}>
            <Text style={{fontFamily: 'NunitoSans_700Bold'}}>{title}</Text>
            <TextInput 
                style={[styles.input, {width: width,height: height }]}
                cursorColor={'black'}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder}
                textAlignVertical={textAlignVertical}
                multiline={multiline}
                value={value}
                />
        </View>
    )
}