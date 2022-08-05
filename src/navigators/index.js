import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native'; 

const Stack = createNativeStackNavigator()


const Navigators = () =>{
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigators;