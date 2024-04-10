import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import GalleryScreen from '../Screens/GalleryScreen';
import OrderScreen from '../Screens/OrderScreen';
import CompletedOrdersScreen from '../Screens/CompletedOrdersScreen';

const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: () => <Header/>
        }
    },
    GalleryScreen: {
        screen: GalleryScreen,
        navigationOptions: {
            headerTitle: () => <Header/>
        }
    },
    OrderScreen: {
        screen: OrderScreen,
        navigationOptions: {
            headerTitle: () => <Header/>
        }
    },
    CompletedOrdersScreen: {
        screen: CompletedOrdersScreen,
        navigationOptions: {
            headerTitle: () => <Header/>
        }
    }
}