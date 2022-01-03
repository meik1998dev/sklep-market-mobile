import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { ProductDetails } from './screens/ProductDetails';
import Colors from './constants/Colors';
import { NativeBaseProvider } from 'native-base';
import { Login } from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NativeBaseProvider>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerStyle: {
                     backgroundColor: 'white',
                  },
                  headerTintColor: Colors.navy,
                  headerTitleStyle: {
                     fontWeight: 'bold',
                  },
               }}>
               <Stack.Screen
                  name='Home'
                  options={{
                     title: 'Sklep Market',
                  }}
                  component={Home}
               />
               <Stack.Screen
                  name='ProductDetails'
                  options={{ title: 'Product Details' }}
                  component={ProductDetails}
               />
               {/* <Stack.Screen
                  name='Login'
                  options={{ title: 'Sklep Market' }}
                  component={Login}
               /> */}
            </Stack.Navigator>
         </NavigationContainer>
      </NativeBaseProvider>
   );
}
