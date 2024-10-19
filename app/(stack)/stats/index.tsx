import { Pressable, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import { NormalHighlight } from "@/components/normalHighlight";
import { Highlight } from "@/components/Highlight";
import { useContext } from "react";
import { DietContext } from "@/context/DietContext";
import { NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

export default function Stats(){

    const {dietList} = useContext(DietContext)

        const outsideDietArray = dietList.filter((item)=> item.insideDiet === 'false')
    
        const insideDietArray = dietList.filter((item)=> item.insideDiet === 'true')
      
        function calcularPorcentagem(parte: number, total:number) {
            return (parte / total) * 100;
          }
          
          const parte = insideDietArray.length;
          const total = dietList.length;
          let porcentagem = calcularPorcentagem(parte, total);
          
          if(Number.isNaN(porcentagem)){
            porcentagem = 0
            }

    return(

        
        <View style={[styles.container, {backgroundColor: porcentagem > 50 ? "#E5F0DB" : "#F4E6E7"}]}>
            <StatusBar backgroundColor={porcentagem > 50 ? "#E5F0DB" : "#F4E6E7"} barStyle="dark-content" />

                <NormalHighlight
                title={porcentagem.toFixed(2) + '%'} 
                subTitle="das refeições dentro da dieta"
                isActive
                iconColor={porcentagem > 50 ? "#639339" : "#BF3B44"}
                background={porcentagem > 50 ? "#E5F0DB" : "#F4E6E7"}
                />
                

            <View style={styles.subPagina}>
                <Text style={{alignSelf:'center',marginTop:20, fontFamily:'NunitoSans_700Bold'}}>Estatísticas gerais</Text>
                <NormalHighlight
                background={'#EFF0F0'}
                width={'90%'}
                title="22"
                subTitle="melhor sequência de pratos dentro da dieta"
                />
                <NormalHighlight
                background={'#EFF0F0'}
                width={'90%'}
                title={dietList.length}
                subTitle="refeições registradas"
                />
                <View style={styles.lowerView}>
                    <NormalHighlight
                    background={'#E5F0DB'}
                    title={insideDietArray.length}
                    subTitle="refeições dentro da dieta"
                    />
                    <NormalHighlight
                    background={'#F4E6E7'}
                    title={outsideDietArray.length}
                    subTitle="refeições fora da dieta"
                    />
                </View>
                

            </View>

        </View>
    )
}