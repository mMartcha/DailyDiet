import { StackHeader } from "@/components/StackHeader";
import { Pressable, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { DietContext, DietProps } from "@/context/DietContext";
import { useContext, useEffect, useState } from "react";
import { Add } from "@/components/Add";
import { Modal } from "@/components/Modal";
import { BlurView } from "expo-blur";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";


export default function MealInfo(){

    const {id} = useLocalSearchParams( )

    const {dietList, setDietList, selectedMeal} = useContext(DietContext)

    const meal = dietList.filter((item) => item.id === id)

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    
    const handleDelete = async (itemToDelete: DietProps) =>{
        const deletedMealList = dietList.filter((item) => item.id !== itemToDelete.id)
        setDietList(deletedMealList)
        await storeDiet(deletedMealList)
    }

    async function deleteMeal(){
        router.navigate('/(stack)/home')
        setDeleteModalOpen(false)
        await handleDelete(selectedMeal)
    }

    const storeDiet = async (value: DietProps[]) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('meal', jsonValue);
        } catch (e) {
        }
      };

      console.log( JSON.stringify(meal, null, 2))

    return(
        meal.length ? (
        <View style={{ flex:1,backgroundColor:meal[0].insideDiet === 'true' ? "#E5F0DB" : "#F4E6E7"}}>
            <StatusBar backgroundColor={meal[0].insideDiet === 'true' ? "#E5F0DB" : "#F4E6E7"} barStyle="dark-content" />

                <StackHeader
                    title="Refeição"
                    background={meal[0].insideDiet === 'true' ? "#E5F0DB" : "#F4E6E7"}
                    backFunction={router.back}
                />
            
            <View style={{ flex:1, borderTopLeftRadius:20, borderTopRightRadius:20,
                gap:20,paddingHorizontal:20,paddingTop:30,backgroundColor:'#fff'}}>
                <View style={{gap:12}}>
                    <Text style={{fontSize:20, fontFamily:'NunitoSans_700Bold'}}>{meal[0].foodName}</Text>
                    <Text style={{fontSize:16, fontFamily:'NunitoSans_400Regular'}}>{meal[0].foodDescription}</Text>
                </View>
                
                <View style={{marginTop:6, gap:12}}>
                    <Text style={{fontSize:20,fontFamily:'NunitoSans_700Bold'}}>Data e hora</Text>
                    <Text style={{fontSize:16, fontFamily:'NunitoSans_400Regular'}}>{meal[0].foodDate} às {meal[0].foodTime}</Text>
                </View>

                <View style={{height:40, width:160,borderRadius:30, backgroundColor:'#EFF0F0',
                     alignItems:'center', justifyContent:'center', flexDirection:'row', gap:6, marginTop:12,}}>
                    <View style={[styles.bolinha, {backgroundColor:meal[0].insideDiet === 'true' ? '#639339' : '#BF3B44' }]}
                    />
                    <Text>{meal[0].insideDiet === 'true' ? 'dentro da dieta' : 'fora da dieta'}</Text>
                </View>

                <View style={{ flex:1, justifyContent:'flex-end', marginBottom:28, gap:12}}>
                    <Add
                        buttonTitle="Editar refeição"
                        width={'100%'}
                        color="#fff"
                        // onPress={() => router.navigate('/(stack)/creation')}
                        onPress={() => router.navigate({
                            pathname: '/(stack)/editing/[edit]',
                            params: {
                                id: meal[0].id   
                            }
                        })}
                        iconLibrary={MaterialCommunityIcons}
                        iconName={'pencil'}
                        iconSize={22}
                    />
                    <Add
                        buttonTitle="Excluir refeição"
                        background={"#fff"}
                        border="black"
                        borderWidth={1}
                        width={'100%'}
                        color="black"
                        onPress={() => setDeleteModalOpen(true)}
                        iconLibrary={MaterialCommunityIcons}
                        iconName={'trash-can-outline'}
                        iconSize={22}
                    />
                </View>
            </View>
            {deleteModalOpen && (
                    <BlurView
                        style={styles.absolute}
                        intensity={50} 
                        tint="dark" 
                    />
                )}

            <Modal isOpen={deleteModalOpen}>
                <View style={{backgroundColor:'#fff', width:"90%", height:180, borderRadius:8, alignItems:'center', paddingBottom: 8,  }}>
                    <View style={{ flex:1, justifyContent:'center', marginHorizontal:60, marginTop:20}}>
                        <Text style={{fontSize:16, fontFamily:'NunitoSans_700Bold', textAlign:'center'}}>Deseja realmente exluir o registo da refeição?</Text>
                    </View>

                    <View style={{flexDirection:'row', flex:1, gap:12}} >
                        <Add
                            buttonTitle="Cancelar"    
                            background={'#fff'}
                            border="black"
                            borderWidth={1}
                            color="black"           
                            width={140}         
                            onPress={() => setDeleteModalOpen(false)}
                        />
                        <Add
                            buttonTitle="Sim, excluir"
                            width={140}        
                            onPress={() => deleteMeal()} 
                        />
                    </View>
                </View>
            </Modal>

        </View>    
        ) : null
        
        
    )
}