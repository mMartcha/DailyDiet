import { StackHeader } from "@/components/StackHeader";
import { Pressable, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { DietContext, DietProps } from "@/context/DietContext";
import { useContext, useState } from "react";
import { Add } from "@/components/Add";
import { Modal } from "@/components/Modal";
import { BlurView } from "expo-blur";


export default function MealInfo(){

    const {id} = useLocalSearchParams( )

    const {dietList, setDietList, selectedMeal} = useContext(DietContext)

    const meal = dietList.filter((item) => item.id === id)

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    
    const handleDelete = (itemToDelete: DietProps) =>{
        const deletedMealList = dietList.filter((item) => item.id !== itemToDelete.id)
        console.log(deletedMealList)
        setDietList(deletedMealList)
    }

    function deleteMeal(){
        handleDelete(selectedMeal)
        setDeleteModalOpen(false)
        router.navigate('/(stack)/home')
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={meal[0].insideDiet === 'true' ? "#E5F0DB" : "#F4E6E7"} barStyle="dark-content" />

            <StackHeader
                title="Refeição"
                background={meal[0].insideDiet === 'true' ? "#E5F0DB" : "#F4E6E7"}
                backFunction={router.back}
            />
            
            <View style={styles.lowerPage}>
                <View style={{gap:12}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>{meal[0].foodName}</Text>
                    <Text style={{fontSize:16}}>{meal[0].foodDescription}</Text>
                </View>
                
                <View style={{marginTop:6}}>
                    <Text style={{fontSize:14,fontWeight:'bold'}}>Data e hora</Text>
                    <Text style={{fontSize:16}}>{meal[0].foodDate} às {meal[0].foodTime}</Text>
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
                            pathname: '(stack)/editing/[edit]',
                            params: {
                                id: meal[0].id   
                            }
                        })}
                        
                    />
                    <Add
                        buttonTitle="Excluir refeição"
                        background={"#fff"}
                        border="black"
                        borderWidth={1}
                        width={'100%'}
                        color="black"
                        onPress={() => setDeleteModalOpen(true)}
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
                <View style={{backgroundColor:'#fff', width:"90%", height:160, borderRadius:8, alignItems:'center', paddingBottom: 8,  }}>
                    <View style={{ flex:1, justifyContent:'center', paddingHorizontal:20}}>
                        <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Deseja realmente exluir o registo da refeição?</Text>
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
    )
}