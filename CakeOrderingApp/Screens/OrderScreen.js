import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';


const OrderScreen = () => {
    return (
        <View>
            <Header/>
           <Text>Hello World!</Text>
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
})