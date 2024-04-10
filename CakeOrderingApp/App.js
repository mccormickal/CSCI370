import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatorNavigator from './Navigation/HomeStack';
import RootNavigator from './navigation/RootNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}
