import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DDDEDF'
        // marginTop:20
        
    },
    lowerPage:{
        backgroundColor:'#fafafa',
        flex:1,
        // bottom:10,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // marginTop:20

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