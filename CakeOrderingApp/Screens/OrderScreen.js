// Libraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// Components
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles';


const OrderScreen = ({ navigation }) => {
    // Define state variables
    const [progress, setProgress] = React.useState(0);

    // Personal info
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    // Order info
    const [pickup, setPickup] = React.useState('Pick Up');
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState('');
    const [datePickerVisible, setDatePickerVisible] = React.useState(false);
    const [timePickerVisible, setTimePickerVisible] = React.useState(false);

    // Handle date picker
    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    // Handle time picker
    const showTimePicker = () => {
        setTimePickerVisible(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisible(false);
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }));
        hideTimePicker();
    };

    // Handle navigation to next page
    const nextPage = () => {
        navigation.navigate('OrderScreen2', { fName, lName, email, phone, pickup, selectedDate, selectedTime });
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.stickyHeader}>
                <Header />
                <View style={styles.pageHeader}>
                    <Text style={styles.pageHeaderText}>Place an Order!</Text>
                </View>
            </View>
            <ProgressBar progress={progress}/>
            <ScrollView>
                
                {/* Personal Info section */}
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
                        maxLength={10}
                    />
                </View>

                {/* Order Info section */}
                <Text style={styles.sectionHeader}>Order Information</Text>
                <View style={orderStyles.formContainer}>

                    {/* Pickup/delivery radio buttons */}
                    <View style={orderStyles.radioContainer}>
                        {/* Pickup button */}
                        <View style={orderStyles.radioButtonContainer}>
                            <Text>Pick Up</Text>
                            <TouchableOpacity
                                style={[orderStyles.radioButton, pickup === 'Pick Up' && styles.radioButtonChecked]}
                                onPress={() => setPickup('Pick Up')}
                            >
                                <RadioButton
                                    checked={pickup === 'Pick Up'}
                                    onPress={() => setPickup('Pick Up')}
                                />
                            </TouchableOpacity>
                            
                        </View>
                        {/* Deliery button */}
                        <View style={[orderStyles.radioButtonContainer, orderStyles.deliveryButton]}>
                            <Text>Delivery</Text>
                            <TouchableOpacity
                                style={[orderStyles.radioButton, pickup === 'Delivery' && orderStyles.radioButtonChecked]}
                                onPress={() => setPickup('Delivery')}
                            >
                                <RadioButton
                                    checked={pickup === 'Delivery'}
                                    onPress={() => setPickup('Delivery')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Date picker */}
                    <Text style={styles.label}>{pickup} Date:</Text>
                    <TouchableOpacity onPress={showDatePicker} style={styles.input}>
                        <Text style={styles.label}>{selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={datePickerVisible}
                        mode="date"
                        date={selectedDate}
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />

                    {/* Time picker */}
                    <Text style={styles.label}>{pickup} Time:</Text>
                    <TouchableOpacity onPress={showTimePicker} style={styles.input}>
                        <Text style={styles.label}>{selectedTime ? selectedTime : 'No time selected'}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={timePickerVisible}
                        mode="time"
                        date={selectedDate}
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />
                </View>
            </ScrollView>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={nextPage} style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default OrderScreen;

const orderStyles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginRight: 10,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    radioButtonChecked: {
        backgroundColor: '#FF4081',
    },
    deliveryButton: {
        //marginRight: 60,
    },
})