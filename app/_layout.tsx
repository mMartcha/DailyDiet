import { StackHeader } from '@/components/StackHeader';
import { DietContextProvider } from '@/context/DietContext';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error ] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
