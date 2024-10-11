import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    title: string
    height: number
    width?: number
}

export function Input({title, height, width, onChangeText, placeholder, keyboardType}:Props){
    return(
        <View style={styles.container}>
            <Text>{title}</Text>
            <TextInput 
                style={[styles.input, {width: width,height: height }]}
                cursorColor={'black'}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder}
                />
            
        </View>
    )
}