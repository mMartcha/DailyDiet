import { StackHeader } from "@/components/StackHeader";
import { Alert, StatusBar, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { router, useFocusEffect } from "expo-router";
import { Input } from "@/components/Input";
import { PressableButton } from "@/components/Pressable";
import { Add } from "@/components/Add";
import { useCallback, useContext, useEffect, useState } from "react";
import { DietContext, DietProps } from "@/context/DietContext";
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from "@/components/Modal";
import { BlurView } from "expo-blur";

export default function Creation(){

    const {dietList,setDietList} = useContext(DietContext)

    
    const [meal, setMeal] = useState({foodName:''} as DietProps)

    const [completeAll, setCompleteAll] = useState(false)

    const newDietList = [...dietList, meal ]   

    useFocusEffect(
        useCallback(() => {
            return () => {
                setMeal({
                    foodDate: '',
                    foodDescription: '',
                    foodName: '',
                    foodTime: '',
                    id: '',
                    insideDiet: ''
                })                
            }
        }, [])
    )
    
    
    function registerMeal(){
        if((meal.foodName === '') || (meal.foodDescription === '') || (meal.foodDate === '') || (meal.foodTime === '') || (meal.id === '')){
            setCompleteAll(true)
            console.log('aquinaobbzinho')
        }else{

            setDietList(newDietList)
            storeDiet(newDietList)
            router.navigate(`/feedback/${meal.insideDiet}`); 
     
        }
        console.log(meal)
       
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
                    textAlignVertical="top"
                    multiline={true}
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

                    <Text style={{marginLeft:20,marginTop:20,marginBottom:10, fontFamily:'NunitoSans_700Bold'}}>Está dentro da dieta?</Text>
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

            {/* {completeAll && (
                    <BlurView
                        style={styles.absolute}
                        intensity={50} 
                        tint="dark" 
                    />
                )} */}

            <Modal isOpen={completeAll}>
            <View style={{backgroundColor:'#fff', width:"90%", height:160, borderRadius:8, alignItems:'center', paddingBottom: 8, borderColor:'black', borderWidth:1  }}>
                    <View style={{ flex:1, justifyContent:'center', marginHorizontal:60, marginTop:20}}>
                        <Text style={{fontSize:16, fontWeight:'500', textAlign:'center', }}>Complete todos os campos!</Text>
                    </View>

                    <View style={{flexDirection:'row', flex:1, gap:12}} >
                        <Add
                            buttonTitle="Voltar"    
                            background={'#fff'}
                            border="black"
                            borderWidth={1}
                            color="black"           
                            width={140}         
                            onPress={() => setCompleteAll(false)}
                        />
                        
                    </View>
                </View>
            </Modal>
        </View>
    )
}