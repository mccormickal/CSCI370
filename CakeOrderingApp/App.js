import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import GalleryScreen from './Screens/GalleryScreen';
import OrderScreen from './Screens/OrderScreen';
import CompletedOrdersScreen from './Screens/CompletedOrdersScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Gallery' component={GalleryScreen}/>
            <Stack.Screen name='Order' component={OrderScreen}/>
            <Stack.Screen name='CompletedOrders' component={CompletedOrdersScreen}/>
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
