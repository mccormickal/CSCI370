import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
// Import screens
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
//import OrderScreen from '../screens/OrderScreen';
import CompletedOrdersScreen from '../screens/CompletedOrdersScreen';
import OrderStackNavigator from './OrderStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    } else if (route.name === 'Gallery') {
                        iconName = focused ? 'images-sharp' : 'images-outline';
                    } else if (route.name === 'Order') {
                        iconName = focused ? 'receipt-sharp' : 'receipt-outline';
                    } else if (route.name === 'CompletedOrders') {
                        iconName = focused ? 'bag-check' : 'bag-check-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF69B4',
                tabBarInactiveTintColor: '#CCCCCC',
                tabBarStyle: {backgroundColor: '#FFFFFF'},
                tabBarLabelStyle: {fontSize: 12}
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="Gallery" 
                component={GalleryScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="Order" 
                component={OrderStackNavigator}
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="CompletedOrders" 
                component={CompletedOrdersScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;