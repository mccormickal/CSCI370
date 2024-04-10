import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Header from '../components/Header';
import Footer from '../Components/Footer';


const OrderScreen = ({ navigation }) => {
    // Define state variables
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [pickup, setPickup] = useState('');
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
            <Header/>
            
            <Text styles={styles.sectionHeader}>Personal Information</Text>
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
                />
                <Text style={styles.label}>Phone Number:</Text>
                <TextInput 
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder='(XXX) XXX-XXXX'
                />
           </View>

           <Text styles={styles.sectionHeader}>Order Information</Text>
           <View style={styles.formContainer}>
                <RNPickerSelect 
                    onValueChange={(pickup) => setPickup(pickup)}
                    items={[
                        { label: 'Pick Up', value: 'PickUp'},
                        { label: 'Delivery', value: 'Delivery'},
                    ]}
                />
                <Text style={styles.label}>Pick Up Date:</Text>
                <TextInput 
                    style={styles.input}
                    value={date}
                    onChangeText={setDate}
                    placeholder='mm/dd/yyyy'
                />
                <Text style={styles.label}>Pick Up Time:</Text>
                <TextInput 
                    style={styles.input}
                    value={time}
                    onChangeText={setTime}
                    placeholder='0:00am'
                />
           </View>

           <Button title="Next" onPress={nextPage}/>

           <Footer/>
        </View>
    );
};

export default OrderScreen;

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