import * as React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import OrderScreen from "../screens/OrderScreen";
import CompletedOrdersScreen from "../screens/CompletedOrdersScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Gallery" component={GalleryScreen}/>
            <Stack.Screen name="Order" component={OrderScreen}/>
            <Stack.Screen name="CompletedOrders" component={CompletedOrdersScreen}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;