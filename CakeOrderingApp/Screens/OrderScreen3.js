import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { CreditCardInput } from 'react-native-credit-card-input-plus';
import stateCodesJSON from '../assets/stateCodes';
// Components
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles';


const OrderScreen3 = ({ route }) => {
    // Get previous page variables
    const { fName, lName, email, phone, pickup, selectedDate, selectedTime,
            size, cakeFlavor, iceFlavor, selectedColors, description} = route.params;
    
    // Define navigation
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    // Define state variables
    const [cardNum, setCardNum] = React.useState('');
    const [expDate, setExpDate] = React.useState('');
    const [expDatePickerVisiible, setExpDatePickerVisibility] = React.useState(false);
    const [cvv, setCvv] = React.useState('');
    const [cardName, setCardName] = React.useState('');

    const [street, setStreet] = React.useState('');
    const [city, setCity] = React.useState('');
    const [zipCode, setZipCode] = React.useState('');
    const [stateCode, setStateCode] = React.useState('');

    // Handle credit card change
    const handleCreditCardChange = (form) => {
        const { values, status } = form;

        if (status.valid) {
            // Credit card data is valid
            const { number, expiry, cvc, name } = values;
            console.log("Credit Card Number:", number);
            console.log("Expiry:", expiry);
            console.log("CVC:", cvc);
            console.log("Name:", name);

            // You can use this data as needed, e.g., store it in state variables
            setCardNum(number);
            setExpDate(expiry);
            setCvv(cvc);
            setCardName(name);
        } else {
            // Credit card data is invalid, handle accordingly
            console.log("Invalid credit card information");
        }
    }

    // Hande Exp Date picker
    const showExpDatePicker = () => {
        setExpDatePickerVisibility(true);
    };

    const hideExpDatePicker = () => {
        setExpDatePickerVisibility(false);
    };

    const handleExpDateConfirm = (date) => {
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
        setExpDate(`${month}/${year}`);
        hideExpDatePicker();
    }

    // US State Codes
    //const stateCodesJSON = stateCodesJSON;
    //const stateCodesArray = JSON.parse(stateCodesJSON);
    const stateList = stateCodesJSON.map(state => ({
        name: state.name,
        id: state.abbreviation
    }));

    // Handle dropdown component
    const DropdownComponent = () => {
        const [value, setValue] = React.useState(null);
        const [isFocus, setIsFocus] = useState(false);
    }

    //Handle navigation to next page
    const nextPage = () => {
        navigation.navigate('OrderScreen4', { fName, lName, email, phone, pickup, selectedDate, selectedTime,
                                            size, cakeFlavor, iceFlavor, selectedColors, description, 
                                            cardNum, expDate, cvv, cardName, street, city, zipCode, stateCode });
    }

    return (
        <View style={styles.container}>
            <View style={styles.stickyHeader}>
                <Header />
                <View style={styles.pageHeader}>
                    <Text style={styles.pageHeaderText}>Place an Order!</Text>
                </View>
            </View>
            <ProgressBar progress={75} />
            <ScrollView>
                {/* Payment Section */}
                <Text style={styles.sectionHeader}>Payment Information</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Card Number:</Text>
                    <CreditCardInput 
                        requiresName
                        allowScroll
                        autoFocus
                        onChange={handleCreditCardChange}
                        inputContainerStyle={orderStyles.creditCardInput}
                    />
                </View>

                {/* Address Section */}
                <Text style={styles.sectionHeader}>Address</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Street:</Text>
                    <TextInput 
                        style={styles.input}
                        value={street}
                        onChangeText={setStreet}
                        placeholder='Street Address'
                        multiline={true}
                        numberOfLines={2}
                    />
                    <Text style={styles.label}>City:</Text>
                    <TextInput 
                        style={styles.input}
                        value={city}
                        onChangeText={setCity}
                        placeholder='City'
                    />
                    <Text style={styles.label}>State:</Text>
                    <Dropdown 
                        style={orderStyles.dropdown}
                        containerStyle={orderStyles.dropdownContainer}
                        inputContainerStyle={orderStyles.dropdownInput}
                        data={stateList}
                        search
                        maxHeight={300}
                        labelField='name'
                        valueField='id'
                        placeholder='Select State'
                        value={stateCode}
                        pickerStyle={{ width: '100%', alignSelf: 'center' }}
                        onChange={item => {
                            setStateCode(item.id);
                        }}
                    />
                    <Text style={styles.label}>Zip Code:</Text>
                    <TextInput 
                        style={styles.input}
                        value={zipCode}
                        onChangeText={setZipCode}
                        placeholder='Zip Code'
                        keyboardType='numeric'
                        maxLength={5}
                    />
                </View>
            </ScrollView>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goBack} style={[styles.button, styles.goBackButton]}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={nextPage} style={[styles.button, styles.nextButton]}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default OrderScreen3;

const orderStyles = StyleSheet.create({
    dropdown: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#f9f9f9',
        color: '#333333',
    },
    dropdownContainer: {
        marginBottom: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    dropdownLabel: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,
     },
});