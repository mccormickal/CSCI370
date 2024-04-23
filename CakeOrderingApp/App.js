import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigator from './navigation/RootNavigator';
import TabNavigator from './navigation/TabNavigator';
import OrderStackNavigator from './navigation/OrderStackNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
      <OrderStackNavigator/>
    </NavigationContainer>
  );
}
