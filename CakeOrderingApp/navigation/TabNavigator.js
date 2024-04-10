import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import OrderScreen from '../screens/OrderScreen';
import CompletedOrdersScreen from '../screens/CompletedOrdersScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName.name = focused ? 'home-icon' : 'home-icon-outline';
                    } else if (route.name === 'Gallery') {
                        iconName.name = focused ? 'gallery-icon' : 'gallery-icon-outline';
                    } else if (route.name === 'Order') {
                        iconName.name = focused ? 'order-icon' : 'order-icon-outline';
                    } else if (route.name === 'ComppletedOrders') {
                        iconName.name = focused ? 'compOrd-icon' : 'compOrd-icon-outline';
                    }
                    return <Ionicons name='{iconName}' size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColot: 'white';
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Gallery" component={GalleryScreen}/>
            <Tab.Screen name="Order" component={OrderScreen}/>
            <Tab.Screen name="CompletedOrders" component={CompletedOrdersScreen}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;