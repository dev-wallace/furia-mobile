import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import ChatScreen from './screens/ChatScreen';
import TimesScreen from './screens/TimesScreen';
import TimeDetalhesScreen from './screens/TimeDetalhesScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Times" 
          component={TimesScreen} 
          options={{ headerShown: false }}
        />
        


        <Stack.Screen 
  name="TimeDetalhes" 
  component={TimeDetalhesScreen} 
  options={{ headerShown: false }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}