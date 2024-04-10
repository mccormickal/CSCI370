import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';
import Footer from '../Components/Footer';


const OrderScreen4 = ({ navigation }) => {

    // Handle submitting the order and passing data to CompletedOrders
    const submitOrder = () => {
        navigation.navigate('CompletedOrders', { orderData });
    }

    return (
        <View style={styles.container}>
            <Header/>
            <Text styles={styles.sectionHeader}>Thank you!</Text>
           <Footer/>
        </View>
    );
};

export default OrderScreen4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});