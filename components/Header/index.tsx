import { Text, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from "./styles";
export function Header(){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="silverware-fork-knife" size={40} color="black" />
            <View style={{flex:1}}>
                <Text style={{fontWeight:'bold'}}>Daily </Text>
                <Text style={{fontWeight:'bold'}}>Diet</Text>
            </View>
            <FontAwesome name="user-circle-o" size={40} color="black" style={{}}/>
        </View>
    )
}