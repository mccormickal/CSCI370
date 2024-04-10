import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../Components/Footer';


const GalleryScreen = () => {
    return (
        <View>
            <Header/>
           <Text>Hello World!</Text>
           <Footer/>
        </View>
    );
};

export default GalleryScreen;

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