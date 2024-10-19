import { Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { DietContext, DietProps } from "@/context/DietContext";


    type Props = PressableProps & {
        item: DietProps
    }

export default function Card({item, onPress}:Props){

    // const {dietList,setDietList} = useContext(DietContext)
    

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center',flex:1,gap:10,paddingLeft:12}}>
                <Text style={{fontWeight:'bold', fontFamily:'NunitoSans_400Regular'}}>{item.foodTime}</Text>
                <View style={{height:20,width:1,backgroundColor:'black'}}/>
                <Text style={{fontSize:16, fontFamily:'NunitoSans_400Regular'}}>{item.foodName}</Text>
            </View>

                <View style={{paddingRight:12}}>
                    <Pressable onPress={() => console.log(item.foodName)}>
                    <View
                    style={[styles.ball, {backgroundColor:item.insideDiet === 'true' ? '#CBE4B4' : '#F3BABD' }]}
                    />
                    </Pressable>
                </View>
        </Pressable>
    )
}