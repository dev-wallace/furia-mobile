import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './screens/LandingScreen';

export default function App() {
  return (
    <NavigationContainer>
      <LandingScreen />
    </NavigationContainer>
  );
}
