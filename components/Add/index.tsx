import React from 'react';
import { Pressable, Text, View, DimensionValue, PressableProps, ColorValue } from 'react-native';
import { styles } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = PressableProps & {
  buttonTitle: string;
  width?: DimensionValue | undefined;
  background?: ColorValue | undefined 
  border?: string
  borderWidth?: number 
  color ?: string
  iconName?: string; 
  icon ?: keyof typeof AntDesign.glyphMap | keyof typeof MaterialCommunityIcons.glyphMap 
};

export function Add({ buttonTitle, width, iconName,icon, background ="#333638", border, borderWidth, color="#fff",onPress }: Props) {
  return (
    <Pressable style={[styles.container, { width, backgroundColor: background, borderColor:border, borderWidth:borderWidth}]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:10}}>
        {iconName && (
          <AntDesign name="plus" size={24} color="#fff" />
        )}
        <Text style={[styles.text,{color: color}]}>
          {buttonTitle}
        </Text>
      </View>
    </Pressable>
  );
}
