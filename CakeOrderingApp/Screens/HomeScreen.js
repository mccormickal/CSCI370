import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';


const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Header/>
            <Text>Hello World!</Text>
            <Button 
                title='Go to Gallery'
                onPress={() => navigation.navigate("Gallery")} 
            />
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