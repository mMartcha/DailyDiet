import { StackHeader } from '@/components/StackHeader';
import { DietContextProvider } from '@/context/DietContext';
import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {

  return (
    <DietContextProvider>
      <Stack >

        <Stack.Screen options={{headerShown:false}}
         name='index'
         />

        <Stack.Screen 
         name='(stack)/home/index'
         options={{
          headerShown:false,
          
        }}
         />

        <Stack.Screen
         name='(stack)/creation/index'
         options={{
           header:({navigation}) =>(
              <StackHeader
                title='Nova Refeição'
                backFunction={navigation.goBack}
                background={'#DDDEDF'}
              />
            )
          }}
          />

        <Stack.Screen 
         name='(stack)/feedback/[idFeedback]'
          options={{
            headerShown:false
          }}
         />

        <Stack.Screen
         name='(stack)/stats/index' options={{headerShown:false}}/>

        <Stack.Screen
          name='(stack)/mealInfo/[id]' options={{headerShown:false}}/>
          
        <Stack.Screen
          name='(stack)/editing/[edit]' options={{headerShown:false}}/>
        


      </Stack>
    </DietContextProvider>
  );
}
