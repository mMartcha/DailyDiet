import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { FlatList, Pressable, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import { Add } from "@/components/Add";
import { router } from "expo-router";
import { useContext, useEffect } from "react";
import { DietContext, DietProps } from "@/context/DietContext";
import Card from "@/components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home(){

    const {dietList, setDietList, setSelectedMeal} = useContext(DietContext)

    function go(item: DietProps){
        router.navigate(`/mealInfo/${item.id}`) 
        setSelectedMeal(item)
        console.log(item)
    }
    
        const insideDietArray = dietList.filter((item)=> item.insideDiet === 'true')
      
        function calcularPorcentagem(parte: number, total:number) {
            return (parte / total) * 100;
          }
          
          const parte = insideDietArray.length;
          const total = dietList.length;
          const porcentagem = calcularPorcentagem(parte, total);

          const getDietList = async () => {
            try {
                const dietListValue = await AsyncStorage.getItem('meal'); 
                if (dietListValue !== null) {
                    const parsedList = JSON.parse(dietListValue);
                    setDietList(parsedList); 
                    console.log('Lista de tarefas carregada:', parsedList);
                }
            } catch (error) {
                console.error('Erro ao carregar a lista de tarefas:', error);
            }
        };

        // useEffect(()=>{
        //     getDietList() // NAO TA FUNCIONANDO DANDO ERRO INSIDE DIET
        // },[])

    return(
        <View style={styles.container}>

            <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
            
            <Header/>
            
            <Highlight 
            porcentage={porcentagem.toFixed(0)}
            subTitle="das refeições dentro da dieta"
            background={porcentagem > 50 ? "#E5F0DB" : "#F4E6E7"}
            width={'90%'}
            iconColor={porcentagem > 50 ? "#639339" : "#BF3B44"}
            onPress={() => router.navigate('/(stack)/stats')}
            />
           

            <Text style={{marginLeft:20,marginTop:40,marginBottom:8}} onPress={() => getDietList()}>Refeições</Text>
            <Add
            buttonTitle="Nova Refeição"
            width={'90%'}
            iconName="plus"
            onPress={() => router.navigate("/(stack)/creation")}
            />
            <View style={styles.flatListView}>
                {/* <Card/> */}
                <FlatList
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                    data={dietList}
                    renderItem={({item}) => (
                        <Card
                        item={item}
                        onPress={() => go(item)}
                        
                        
                        />
                    )}
                />
            </View>
        </View>
    )
}