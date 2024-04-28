import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Components
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles';


const OrderScreen4 = ({ route }) => {
    // Get previous page variables
    const { fName, lName, email, phone, pickup, selectedDate, selectedTime,
            size, cakeFlavor, iceFlavor, selectedColors, description,
            cardNum, expDate, cvv, cardName, street, city, zipCode, stateCode } = route.params;
    
    // Define navigation
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };

    // Store completed orders
    const [completedOrders, setCompletedOrders] = React.useState([]);

     // Handle submitting the order and passing data to CompletedOrders
     const submitOrder = () => {
        setCompletedOrders(prevOrders => [...prevOrders, route.params]);
        navigation.navigate('CompletedOrders', {
          completedOrders: [...completedOrders, route.params]
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.stickyHeader}>
                <Header />
                {/* Page header */}
                <View style={styles.pageHeader}>
                    <Text style={styles.pageHeaderText}>Review you Order</Text>
                </View>
            </View>
            <ProgressBar progress={99} />

            <View style={orderStyles.bodyText}>
                <Text style={orderStyles.sectionHeader}>Order Details:</Text>
                <View style={orderStyles.sectionContent}>
                    <Text style={orderStyles.sectionText}>Name: {fName} {lName}</Text>
                    <Text style={orderStyles.sectionText}>Phone: {phone}</Text>
                </View>

                <Text style={orderStyles.sectionHeader}>Cake Details:</Text>
                <View style={orderStyles.sectionContent}>
                    <Text style={orderStyles.sectionText}>Size: {size}</Text>
                    <Text style={orderStyles.sectionText}>Cake Flavor: {cakeFlavor}</Text>
                    <Text style={orderStyles.sectionText}>Icing Flavor: {iceFlavor}</Text>
                    <Text style={orderStyles.sectionText}>Icing Colors: {selectedColors.join(', ')}</Text>
                    {description && (
                        <Text style={orderStyles.sectionText}>Description: {description}</Text>
                    )}
                </View>

                <Text style={orderStyles.sectionHeader}>Payment Details:</Text>
                <View style={orderStyles.sectionContent}>
                    <Text style={orderStyles.sectionText}>Card Number: {cardNum}</Text>
                    <Text style={orderStyles.sectionText}>Name on Card: {cardName}</Text>
                </View>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goBack} style={[styles.button, styles.goBackButton]}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={submitOrder} style={[styles.button, styles.submitButton]}>
                    <Text style={styles.buttonText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default OrderScreen4;

const orderStyles = StyleSheet.create({
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
        color: '#FF69B4', 
    },
    sectionContent: {
        marginBottom: 15,
        paddingLeft: 10,
    },
    sectionText: {
        fontSize: 16,
        color: '#555', // Dark text color for section content
    },
    bodyText: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
        color: '#FF69B4', // Pink color for section headers
        textDecorationLine: 'underline', // Underline for section headers
    },
    orderInfo: {
        fontSize: 16,
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,

    },
});