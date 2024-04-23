import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../screens/OrderScreen';
import OrderScreen2 from '../screens/OrderScreen2';
import OrderScreen3 from '../screens/OrderScreen3';
import OrderScreen4 from '../screens/OrderScreen4';

const Stack = createStackNavigator();

const OrderStackNavigator = () => {
    <Stack.Navigator initialRouteName='OrderScreen'>
        <Stack.Screen name='OrderScreen' component={OrderScreen}/>
        <Stack.Screen name='OrderScreen2' component={OrderScreen2}/>
        <Stack.Screen name='OrderScreen3' component={OrderScreen3}/>
        <Stack.Screen name='OrderScreen4' component={OrderScreen4}/>
    </Stack.Navigator>
};

export default OrderStackNavigator;