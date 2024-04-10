import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import Footer from '../Components/Footer';


const CompletedOrdersScreen = ({ route }) => {
    // Get order data from Order screen
    const { orderData } = route.params;

    const renderItem = ({ item }) => {
        <View style={styles.orderItem}>
            <Text style={styles.orderItem}>{item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>PickUp Date: {item.date}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <Header/>
           <FlatList 
            data={orderData.items}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
           />
           <Footer/>
        </View>
    );
};

export default CompletedOrdersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    orderItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});