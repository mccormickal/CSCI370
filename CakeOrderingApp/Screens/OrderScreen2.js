import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';


const OrderScreen2 = ({ navigation }) => {
    // Define state variables
    const [] = React.useState('');

    // Handle navigation to next page
    const nextPage = () => {
        navigation.navigate('OrderScreen3', {});
    }

    // Handle submitting the order and passing data to CompletedOrders
    const submitOrder = () => {
        navigation.navigate('CompletedOrders', { orderData });
    }

    return (
        <View style={styles.container}>
            <Header/>

            <Text styles={styles.sectionHeader}></Text>
           <View style={styles.formContainer}>
                <Text style={styles.label}></Text>
                <TextInput 
                />
                <Text style={styles.label}></Text>
                <TextInput 
                />
                <Text style={styles.label}></Text>
                <TextInput 
                />
                <Text style={styles.label}></Text>
                <TextInput 
                />
           </View>
           
           <Button title="Next" onPress={nextPage}/>

           <Footer/>
        </View>
    );
};

export default OrderScreen2;

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