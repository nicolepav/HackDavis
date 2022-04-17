import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import Login from './screens/Login';



const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
         <Stack.Screen name="SecondScreen" component={SecondScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

