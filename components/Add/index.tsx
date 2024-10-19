import React from 'react';
import { Pressable, Text, View, DimensionValue, PressableProps, ColorValue } from 'react-native';
import { styles } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type IconLibrary = typeof AntDesign | typeof MaterialCommunityIcons

type Props = PressableProps & {
  width?: DimensionValue | undefined;
  background?: ColorValue | undefined 
  buttonTitle: string;
  border?: string
  borderWidth?: number 
  color ?: string
  iconName?: any; 
  iconLibrary?: IconLibrary
  iconSize?: number
};

export function Add({ buttonTitle, width, iconName, background ="#333638", border, borderWidth, color="#fff",onPress, iconLibrary: IconLibrary, iconSize }: Props) {
  return (
    <Pressable style={[styles.container, { width, backgroundColor: background, borderColor:border, borderWidth:borderWidth}]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:10}}>
        {IconLibrary && iconName &&(
          <IconLibrary name={iconName} color={color} size={iconSize}/>
        )}
        <Text style={[styles.text,{color: color}]}>
          {buttonTitle}
        </Text>
      </View>
    </Pressable>
  );
}
