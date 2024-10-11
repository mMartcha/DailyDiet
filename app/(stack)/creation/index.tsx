import { StackHeader } from "@/components/StackHeader";
import { StatusBar, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { Input } from "@/components/Input";
import { PressableButton } from "@/components/Pressable";
import { Add } from "@/components/Add";
import { useContext, useState } from "react";
import { DietContext, DietProps } from "@/context/DietContext";
import uuid from 'react-native-uuid';

export default function Creation(){

    const {dietList,setDietList} = useContext(DietContext)

    
    const [meal, setMeal] = useState({} as DietProps)
    
    const newDietList = [...dietList, meal ]      
    
    function registerMeal(){
        setDietList(newDietList)
        router.navigate(`/feedback/${meal.insideDiet}`); 
        // console.log(meal)
    }

    

    return(
        <View style={styles.container}>

            <StatusBar backgroundColor="#DDDEDF" barStyle="dark-content" />

            <View style={styles.lowerPage}>
                <Input
                    title="Nome"
                    height={46}
                    value={meal.foodName}
                    onChangeText={(text) => setMeal({...meal, foodName: text})}
                />

                <Input
                    title="Descrição"
                    height={100}
                    value={meal.foodDescription}
                    onChangeText={(text) => setMeal({...meal, foodDescription: text})}
                />

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Input
                        title="Data"
                        height={46}
                        width={158}
                        value={meal.foodDate}
                        onChangeText={(text) => setMeal({...meal, foodDate: text})}
                        />
                    <Input
                        title="Hora"
                        height={46}
                        width={158}
                        value={meal.foodTime}
                        onChangeText={(text) => setMeal({...meal, foodTime: text})}
                        />
                </View>

                    <Text style={{marginLeft:20,marginTop:20,marginBottom:10}}>Está dentro da dieta?</Text>
                <View style={{flexDirection:'row',gap:12, justifyContent:'center',marginHorizontal:20}}>
                    <PressableButton
                        title="Sim"
                        background={meal.insideDiet === 'true' ? '#E5F0DB' : '#DDDEDF'}
                        border="#639339"
                        ball
                        ballcolor="#639339"
                        onPress={() => setMeal({...meal, insideDiet: 'true', id: uuid.v4().toString() })}
                        
                    />

                    <PressableButton
                        title="Não"
                        background={meal.insideDiet === 'false' ? '#F4E6E7' : '#DDDEDF'}
                        border="#BF3B44"
                        ball
                        ballcolor="#BF3B44"
                        onPress={() => setMeal({...meal, insideDiet: 'false', id: uuid.v4().toString()})}
                    />
                </View>

                <View style={{top:160}}>
                    <Add
                    buttonTitle="Cadastrar refeição"
                    width={'90%'}
                    onPress={() => registerMeal()}
                    />
                </View>

            </View>
        </View>
    )
}