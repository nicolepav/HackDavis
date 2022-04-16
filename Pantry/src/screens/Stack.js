import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name = "home"
            component={Home}
            options={{ title: 'Welcome' }}
        />
        <Stack.Screen
            name = "onboarding"
            component={Onboarding}
            options={{ title: 'onboard' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};