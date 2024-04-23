import * as React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Header from "../components/Header";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import OrderScreen from "../screens/OrderScreen";
import CompletedOrdersScreen from "../screens/CompletedOrdersScreen";
import TabNavigator from "./TabNavigator";


const Stack = createNativeStackNavigator();

function Tabs() {
    return (
        <TabNavigator />
    )
}

const RootNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Order"
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
            <Stack.Screen 
                name="TabNavigator"
                component={TabNavigator}
                options={{header: () => null}}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;