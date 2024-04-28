import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';


const CompletedOrdersScreen = ({ route }) => {
    // Access completedOrders from route params
    const completedOrders = route.params?.completedOrders || [];

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
                <Text style={styles.noOrdersText}>There are currently no completed orders</Text>
            ) : (
                <FlatList 
                    data={completedOrders}
                    renderItem={({item}) => (
                        // Each individual order
                        <View style={styles.orderContainer}>
                            {/* Order header */}
                            <View style={styles.orderHeaderContainer}>
                                <Text style={styles.orderHeaderText}>{item.cakeFlavor} Cake</Text>
                                <Text style={styles.orderHeaderText}>{item.pickup} on {item.selectedDate} @ {item.selectedTime}</Text>
                            </View>

                            {/* Cake details */}
                            <View style={styles.cakeDetailsContainer}>
                                <Text style={styles.cakeDetailsText}>{item.size} {item.cakeFlavor} Cake</Text>
                                <Text style={styles.cakeDetailsText}>{item.iceFlavor} Icing</Text>
                                <Text style={styles.cakeDetailsText}>Colors: {item.selectedColors.join(', ')}</Text>
                                <Text style={styles.cakeDetailsText}>Description: {item.description}</Text>
                            </View>

                            {/* Order details */}
                            <View style={styles.orderDetailsContainer}>
                                <Text style={styles.orderDetailsText}>Name on Order: {item.fName} {item.lName}</Text>
                                <Text style={styles.orderDetailsText}>Confirmation Email: {item.email}</Text>
                                <Text style={styles.orderDetailsText}>Phone Number: {item.phone}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCE4EC',
    },
    stickyHeader: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    pageHeader: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 8,
        paddingHorizontal: 20,
    },
    pageHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF4081', 
    },
    noOrdersText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    },
    orderContainer: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
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