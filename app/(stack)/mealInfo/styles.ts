import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFAFA',
        flex:1,
        
    },
    lowerPage:{
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        gap:20,
        paddingHorizontal:20,
        paddingTop:20,
        
    },
    bolinha:{
        height:8,
        width:8,
        borderRadius:16,
    },
    absolute:{
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1, 
    },
})