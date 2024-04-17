import * as React from "react";
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Header from "../components/Header";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import OrderScreen from "../screens/OrderScreen";
import CompletedOrdersScreen from "../screens/CompletedOrdersScreen";

//enableScreens();
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Home" 
                component={HomeScreen}
                options={{header: () => <Header />}}
            />
            <Stack.Screen name="Gallery" 
                component={GalleryScreen}
                options={{header: () => <Header />}}
            />
            <Stack.Screen name="Order" 
                component={OrderScreen}
                options={{header: () => <Header />}}
            />
            <Stack.Screen name="CompletedOrders" 
                component={CompletedOrdersScreen}
                options={{header: () => <Header />}}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;