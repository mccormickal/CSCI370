import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import styles from '../styles';


const CompletedOrdersScreen = ({ route }) => {
    // Access completedOrders from route params
    const completedOrders = route.params?.completedOrders || [];

    // Parse date and time string
    // const parsedDate = new Date(completedOrders.selectedDate);
    // const parsedTime = new Date(completedOrders.selectedTime);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.stickyHeader}>
                <Header />
                {/* Page header */}
                <View style={styles.pageHeader}>
                    <Text style={styles.pageHeaderText}>Completed Orders</Text>
                </View>
            </View>

            {/* Completed orders */}
            {/* Determine if completedOrders is empty */}
            {completedOrders.length === 0 ? (
                <Text style={completedOrdersStyles.noOrdersText}>There are currently no completed orders</Text>
            ) : (
                <FlatList 
                    data={completedOrders}
                    contentContainerStyle={styles.FlatListContainer}
                    renderItem={({item}) => (
                        // Each individual order
                        <View style={styles.formContainer}>
                            {/* Order header */}
                            <View style={completedOrdersStyles.orderHeaderContainer}>
                                <Text style={completedOrdersStyles.orderHeaderText}>{item.cakeFlavor} Cake</Text>
                                <Text style={completedOrdersStyles.orderHeaderText}>{item.pickup} on {item.selectedDate} @ {item.selectedTime}</Text>
                            </View>

                            {/* Cake details */}
                            <View style={completedOrdersStyles.cakeDetailsContainer}>
                                <Text style={completedOrdersStyles.cakeDetailsText}>{item.size} {item.cakeFlavor} Cake</Text>
                                <Text style={completedOrdersStyles.cakeDetailsText}>{item.iceFlavor} Icing</Text>
                                <Text style={completedOrdersStyles.cakeDetailsText}>Colors: {item.selectedColors.join(', ')}</Text>
                                <Text style={completedOrdersStyles.cakeDetailsText}>Description: {item.description}</Text>
                            </View>

                            {/* Order details */}
                            <View style={completedOrdersStyles.orderDetailsContainer}>
                                <Text style={completedOrdersStyles.orderDetailsText}>Name on Order: {item.fName} {item.lName}</Text>
                                <Text style={completedOrdersStyles.orderDetailsText}>Confirmation Email: {item.email}</Text>
                                <Text style={completedOrdersStyles.orderDetailsText}>Phone Number: {item.phone}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
};

export default CompletedOrdersScreen;

const completedOrdersStyles = StyleSheet.create({
    noOrdersText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    },
    orderHeaderContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 10,
    },
    orderHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    cakeDetailsContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    cakeDetailsText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
    },
    orderDetailsContainer: {
        paddingTop: 10,
    },
    orderDetailsText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
    },
});