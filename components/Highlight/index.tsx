import { ColorValue, DimensionValue, Pressable, PressableProps, Text, View,  } from "react-native";
import React, { useState, useEffect } from 'react';
import { styles } from "./styles";
import Feather from '@expo/vector-icons/Feather';
import AppLoading from 'expo-app-loading';
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";




type Props = PressableProps & {
    porcentage: any
    subTitle:string
    background: ColorValue | undefined
    width: DimensionValue | undefined
    iconColor: string
}

export function Highlight({porcentage,subTitle, background,width, iconColor, onPress}:Props){

    return(
    <Pressable onPress={onPress}style={[styles.container, {backgroundColor:background, width: width}]}>   
        <View style={{flex:1,alignItems:'center',position:'absolute'}}>
            <Text style={{ fontSize:30, fontFamily:'NunitoSans_700Bold'}}>{porcentage}%</Text>
            <Text style={{fontFamily:'NunitoSans_400Regular'}}>{subTitle}</Text>
        </View>
        <View>
            <Feather name="arrow-up-right" size={24} color={iconColor} style={{left:160, bottom:30}}/>
        </View>
    </Pressable>
    )
        
}