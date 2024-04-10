import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../Components/Footer';


const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Header/>
            <Text>Hello World!</Text>
            <Button 
                onPress={() => {
                    navigation.navigate("Order")
                }} 
            >
                Order Now!
            </Button>
            <Footer/>
        </View>
    );
};

export default HomeScreen;

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