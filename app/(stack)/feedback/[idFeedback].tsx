import { Add } from "@/components/Add";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./styles";




export default function Feedback(){

    const {idFeedback} = useLocalSearchParams()

    const dietFailure = require('@/assets/images/dietFailure.png')
    const dietSuccess = require('@/assets/images/dietSuccess.png')

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FAFAFA', gap:24 }}>
            <View style={{gap:12,alignItems:'center'}}>
                {/* {idFeedback} */}
                <Text style={[styles.titleText,{color: idFeedback === 'true' ? "#639339" : '#BF3B44'}]}>{idFeedback === 'true' ? "Continue assim!" : "Que pena!"} </Text>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>
                {idFeedback === 'true' ? (
                    <>
                    Você continua <Text style={{ fontWeight: 'bold' }}>dentro da dieta</Text>. Muito bem!
                    </>
                ) : (
                    <>
                    Você <Text style={{ fontWeight: 'bold' }}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
                    </>
                )}
                </Text>            

                </View>

            <View style={{gap:30}}>
                <Image
                style={{width:320, height:320}}    
                source={(idFeedback === 'true' ? dietSuccess : dietFailure)}
                resizeMode="contain"
                />
                <Add
                buttonTitle={"Ir para a página principal"}     
                width={220}       
                onPress={() => router.navigate('/(stack)/home')}
                />
            </View>
        </View>
    )
}