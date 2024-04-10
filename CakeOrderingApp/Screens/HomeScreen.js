import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../Components/Footer';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Hello World!</Text>
                <Text style={styles.bodyText}>
                    Body text paragraph
                </Text>
                <Button 
                    onPress={() => {
                        navigation.navigate("Order")
                    }} 
                   title="Order Now!"
                />
            </View>
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
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    bodyText: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: "center",
    },
})