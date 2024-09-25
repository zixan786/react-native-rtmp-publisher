/* eslint-disable prettier/prettier */

// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'; // Import your home screen
import Stream from './screens/Stream'; // Import your other screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Stream" component={Stream} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
