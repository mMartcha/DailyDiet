import { Add } from "@/components/Add";
import { Input } from "@/components/Input";
import { PressableButton } from "@/components/Pressable";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import { StackHeader } from "@/components/StackHeader";
import { useContext, useState } from "react";
import { DietContext, DietProps } from "@/context/DietContext";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

type Params = {
    foodName: string
    foodDesc: string
    foodTime: string
    foodDate: string
    insideDiet: string
}


export default function Edit(){

    const { id } = useLocalSearchParams()

    const { dietList, setDietList } = useContext(DietContext)

    const meal = dietList.filter((item) => item.id === id)[0]

    const [editMeal, setEditMeal] = useState(meal)

    function go(){
        const newDietList = dietList.map((item) => item.id === editMeal.id ? editMeal : item )
        setDietList(newDietList)
        storeDiet(newDietList)
        console.log(editMeal)
        router.back()
    }

    const storeDiet = async (value: DietProps[]) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('meal', jsonValue);
        } catch (e) {
        }
      };

    return(
        <View style={styles.container}>

            <StackHeader
               backFunction={router.back}
               title="Editar refeição"
            />

            <StatusBar backgroundColor="#DDDEDF" barStyle="dark-content" />

            <View style={styles.lowerPage}>
                <Input
                    title="Nome"
                    height={46}
                    // value={meal.foodName}
                    placeholder={meal.foodName} 
                    onChangeText={(text) => setEditMeal({...editMeal, foodName: text})}
                    />

                <Input
                    title="Descrição"
                    height={100}
                    // value={meal.foodDescription}
                    onChangeText={(text) => setEditMeal({...editMeal, foodDescription: text})}
                    placeholder={meal.foodDescription}
                    placeholderTextColor={'black'}
                    multiline={true}
                    textAlignVertical="top"
                />

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Input
                        title="Data"
                        height={46}
                        width={158}
                        // value={meal.foodDate}
                        onChangeText={(text) => setEditMeal({...editMeal, foodDate: text})}
                        placeholder={meal.foodDate}

                        />
                    <Input
                        title="Hora"
                        height={46}
                        width={158}
                        // value={meal.foodTime}
                        onChangeText={(text) => setEditMeal({...editMeal, foodTime: text})}
                        placeholder={meal.foodTime}

                        />
                </View>

                    <Text style={{marginLeft:20,marginTop:20,marginBottom:10, fontFamily:'NunitoSans_700Bold'}}>Está dentro da dieta?</Text>
                <View style={{flexDirection:'row',gap:12, justifyContent:'center',marginHorizontal:20}}>
                    <PressableButton
                        title="Sim"
                        background={editMeal.insideDiet === 'true' ? '#E5F0DB' : '#DDDEDF'}
                        border="#639339"
                        ball
                        ballcolor="#639339"
                        onPress={() => setEditMeal({...editMeal, insideDiet: 'true' })}
                        
                    />

                    <PressableButton
                        title="Não"
                        background={editMeal.insideDiet === 'false' ? '#F4E6E7' : '#DDDEDF'}
                        border="#BF3B44"
                        ball
                        ballcolor="#BF3B44"
                        onPress={() => setEditMeal({...editMeal, insideDiet: 'false'})}
                    />
                </View>

                <View style={{top:160}}>
                    <Add
                    buttonTitle="Salvar alterações"
                    width={'90%'}
                    onPress={() => go()}
                
                    />
                </View>

            </View>
        </View>
    )
}