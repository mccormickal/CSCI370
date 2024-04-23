import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderScreen2 from '../screens/OrderScreen2';


const OrderScreen = ({ navigation }) => {
    // Define state variables
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [pickup, setPickup] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    // Handle navigation to next page
    const nextPage = () => {
        navigation.navigate('OrderScreen2', { fName, lName, email, phone });
    }

    // Handle submitting the order and passing data to CompletedOrders
    const submitOrder = () => {
        navigation.navigate('CompletedOrders', { orderData });
    }

    return (
        <View style={styles.container}>
            <View style={styles.stickyHeader}>
                <Header />
                <View style={styles.pageHeader}>
                    <Text style={styles.pageHeaderText}>Place an Order!</Text>
                </View>
            </View>
            <ScrollView>
                <Text style={styles.sectionHeader}>Personal Information</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>First Name:</Text>
                    <TextInput 
                        style={styles.input}
                        value={fName}
                        onChangeText={setFName}
                        placeholder='Enter first name'
                    />
                    <Text style={styles.label}>Last Name:</Text>
                    <TextInput 
                        style={styles.input}
                        value={lName}
                        onChangeText={setLName}
                        placeholder='Enter last name'
                    />
                    <Text style={styles.label}>Email:</Text>
                    <TextInput 
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter email'
                        keyboardType='email-address'
                    />
                    <Text style={styles.label}>Phone Number:</Text>
                    <TextInput 
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        placeholder='(XXX) XXX-XXXX'
                        keyboardType='phone-pad'
                    />
                </View>

                <Text style={styles.sectionHeader}>Order Information</Text>
                <View style={styles.radioContainer}>
                <View style={styles.radioButtonContainer}>
                    <Text>Pick Up</Text>
                    <View style={styles.radioButton}>
                        <RadioButton
                            value="PickUp"
                            status={pickup === 'PickUp' ? 'checked' : 'unchecked'}
                            onPress={() => setPickup('PickUp')}
                        />
                    </View>
                </View>
                <View style={[styles.radioButtonContainer, styles.deliveryButton]}>
                    <Text>Delivery</Text>
                    <View style={styles.radioButton}>
                        <RadioButton
                            value="Delivery"
                            status={pickup === 'Delivery' ? 'checked' : 'unchecked'}
                            onPress={() => setPickup('Delivery')}
                        />
                    </View>
                </View>
                </View>
                <View style={styles.formContainer}>
                        <Text style={styles.label}>Pick Up Date:</Text>
                        <TextInput 
                            style={styles.input}
                            value={date}
                            onChangeText={setDate}
                            placeholder='mm/dd/yyyy'
                            keyboardType='numeric'
                        />
                        <Text style={styles.label}>Pick Up Time:</Text>
                        <TextInput 
                            style={styles.input}
                            value={time}
                            onChangeText={setTime}
                            placeholder='0:00am'
                        />
                </View>
                <View style={styles.nextButtonContainer}>
                    <TouchableOpacity onPress={nextPage} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </View>
        
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageHeader: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    pageHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sectionHeader: {
        fontSize:20,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    formContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        color: '#333',
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingHorizontal: 20,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButton: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    deliveryButton: {
        marginRight: 80,
    },
    nextButtonContainer: {
       marginTop: 20,
       alignItems: 'center',
       marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});