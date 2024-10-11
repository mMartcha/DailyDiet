import { Text, View } from "react-native";
import { styles } from "./styles";
import Creation from "./(stack)/creation";
import Feedback  from "./(stack)/feedback/[idFeedback]";
import Home from "./(stack)/home";
import MealInfo from "./(stack)/mealInfo/[id]";

export default function App(){
    return(
        <View style={styles.container}>
            <Home/> 
            {/* <Stats/> */}
            {/* <Creation/> */}
            {/* <Feedback
                title="Que pena!"
                subTitle="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
                /> */}
            {/* <MealInfo/> */}
        </View>
    )
}