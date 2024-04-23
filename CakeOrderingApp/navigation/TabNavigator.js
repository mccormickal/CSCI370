import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrderStackNavigator from './OrderStackNavigator';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import OrderScreen from '../screens/OrderScreen';
import CompletedOrdersScreen from '../screens/CompletedOrdersScreen';
import Header from "../components/Header";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                        return <Ionicons name={iconName} size={size} color={color} />
                    } else if (route.name === 'Gallery') {
                        iconName = focused ? 'images-sharp' : 'images-outline';
                        return <Ionicons name={iconName} size={size} color={color} />
                    } else if (route.name === 'Order') {
                        iconName = focused ? 'receipt-sharp' : 'receipt-outline';
                        return <Ionicons name={iconName} size={size} color={color} />
                    } else if (route.name === 'ComppletedOrders') {
                        iconName = focused ? 'bag-check' : 'bag-check-outline';
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                    return iconName;
                }
            })}

            // screenOptions={{
            //     "tabBarActiveTintColor": "blue",
            //     "tabBarStyle": [
            //         {
            //             "display": "flex"
            //         },
            //         null
            //     ]
            // }}

            
            // tabBarOptions={{
            //     activeTintColor: 'blue',
            //     inactiveTintColot: 'white',
            // }}
        >
            <Tab.Screen name="Home" 
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="Gallery" 
                component={GalleryScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="Order" 
                component={OrderScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="CompletedOrders" 
                component={CompletedOrdersScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="OrderStack" component={OrderStackNavigator}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;