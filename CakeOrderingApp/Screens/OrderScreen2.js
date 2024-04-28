// Libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Components
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles';


const OrderScreen2 = ({ route }) => {
    // Get previous page variables
    const { fName, lName, email, phone, pickup, selectedDate, selectedTime } = route.params;

    // Define navigation
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };

    // Define state variables
    const [isFocus, setIsFocus] = React.useState(false);
    const [size, setSize] = React.useState('');
    const [cakeFlavor, setCakeFlavor] = React.useState('');
    const [iceFlavor, setIceFlavor] = React.useState('');

    const [selectedColors, setSelectedColors] = React.useState([]);
    const [description, setDescription] = React.useState('');

    // Dropdown variables
    const sizeOptions = [
        {label: '6" round', value: '6" Round'},
        {label: '8" round', value: '8" Round'},
        {label: '10" round', value: '10" Round'},
        {label: '12" round', value: '12" Round'},
        {label: '6" square', value: '6" Square'},
        {label: '8" square', value: '8" Square'},
        {label: '10" square', value: '10" Square'},
        {label: '12" square', value: '12" Square'},
    ];
    const cakeFlavors = [
        {label: 'Vanilla', value: 'Vanilla'},
        {label: 'Chocolate', value: 'Chocolate'},
        {label: 'Red Velvet', value: 'Red Velvet'},
        {label: 'Lemon', value: 'Lemon'},
        {label: 'Carrot', value: 'Carrot'},
        {label: 'Funfetti', value: 'Funfetti'},
        {label: 'Coconut', value: 'Coconut'},
    ];
    const iceFlavors = [
        {label: 'Vanilla', value: 'Vanilla'},
        {label: 'Chocolate', value: 'Chocolate'},
        {label: 'Cream Cheese', value: 'Cream Cheese'},
        {label: 'Strawberry', value: 'Strawberry'},
        {label: 'Raspberry', value: 'Raspberry'},
    ];
    const colorOptions = [
        {name: 'Red', id: 'Red'},
        {name: 'Orange', id: 'Orange'},
        {name: 'Yellow', id: 'Yellow'},
        {name: 'Green', id: 'Green'},
        {name: 'Blue', id: 'Blue'},
        {name: 'Purple', id: 'Purple'},
        {name: 'Pink', id: 'Pink'},
        {name: 'White', id: 'White'},
        {name: 'Black', id: 'Black'},
        {name: 'Brown', id: 'Brown'},
        {name: 'Gold', id: 'Gold'},
    ];

    // Handle color selection change
    const onColorChange = (selectedItems) => {
        setSelectedColors(selectedItems);
    };
    // Handle confirming color selections and closing SectionedMultiSelect
    const confirmSelections = (items) => {
        setSelectedColors(items.map(item => colorOptions.find(color => color.id === item).name));
    };

    // Handle navigation to next page
    const nextPage = () => {
        navigation.navigate('OrderScreen3', { fName, lName, email, phone, pickup, selectedDate, selectedTime,
                                            size, cakeFlavor, iceFlavor, selectedColors, description });
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
            <ProgressBar progress={25} />
            <ScrollView>
                {/* Cake Information section */}
                <Text style={styles.sectionHeader}>Cake Information</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Cake Size:</Text>
                    <Dropdown 
                        style={[orderStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={orderStyles.placeholderStyle}
                        selectedTextStyle={orderStyles.selectedTextStyle}
                        inputSearchStyle={orderStyles.inputSearchStyle}
                        iconStlye={orderStyles.iconStlye}
                        data={sizeOptions}
                        search 
                        labelField='label'
                        valueField='value'
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder='Search...'
                        value={size}
                        onFocus={() => setIsFocus(true)}
                        onBlue={() => setIsFocus(false)}
                        onChange={item => {
                            setSize(item.value);
                            setIsFocus(false);
                        }}
                    />
                    
                    <Text style={styles.label}>Cake Flavor:</Text>
                    <Dropdown 
                        style={[orderStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={orderStyles.placeholderStyle}
                        selectedTextStyle={orderStyles.selectedTextStyle}
                        inputSearchStyle={orderStyles.inputSearchStyle}
                        iconStlye={orderStyles.iconStlye}
                        data={cakeFlavors}
                        search 
                        labelField='label'
                        valueField='value'
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder='Search...'
                        value={cakeFlavor}
                        onFocus={() => setIsFocus(true)}
                        onBlue={() => setIsFocus(false)}
                        onChange={item => {
                            setCakeFlavor(item.value);
                            setIsFocus(false);
                        }}
                    />
                    
                    <Text style={styles.label}>Icing Flavors:</Text>
                    <Dropdown 
                        style={[orderStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={orderStyles.placeholderStyle}
                        selectedTextStyle={orderStyles.selectedTextStyle}
                        inputSearchStyle={orderStyles.inputSearchStyle}
                        iconStlye={orderStyles.iconStlye}
                        data={iceFlavors}
                        search 
                        labelField='label'
                        valueField='value'
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder='Search...'
                        value={iceFlavor}
                        onFocus={() => setIsFocus(true)}
                        onBlue={() => setIsFocus(false)}
                        onChange={item => {
                            setIceFlavor(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>

                {/* Decorations section */}
                <Text style={styles.sectionHeader}>Decorations:</Text>
                <View style={styles.formContainer}>
                    {/* Icing color selection */}
                    <Text style={styles.label}>Colors:</Text>
                    <View style={orderStyles.multiSelectContainer}>
                        <SectionedMultiSelect
                            items={colorOptions}
                            IconRenderer={Icon}
                            uniqueKey='id'
                            subKey='children'
                            selectText='Choose a color(s)'
                            showDropDowns={true}
                            onSelectedItemsChange={onColorChange}
                            selectedItems={selectedColors}
                            styles={orderStyles.multiSelect}
                            colors={{
                                primary: '#5c3a9e',
                                success: '#5c3a9e',
                                //chipColor: '#f7f7f7',
                              }}
                        />
                    </View>

                    {/* <View style={styles.selectedColorsContainer}>
                        {selectedColors.map(color => (
                            <View key={color} style={[styles.selectedColor, { backgroundColor: color }]} />
                        ))}
                    </View> */}

                    {/* Description */}
                    <Text style={styles.label}>Description:</Text>
                    <TextInput 
                        style={styles.input}
                        value={description}
                        onChangeText={setDescription}
                        placeholder='Add any information about how you would like the cake to look
                                    (i.e. writing, designs)'
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

export default OrderScreen2;

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
    multiSelectContainer: {
        marginBottom: 20,
    },
    multiSelect: {
        container: {
            height: 20,
        },
        listContainer: {
            height: 10,
        },
        item: {
            paddingHorizontal: 10,
        },
        selectedItemText: {
            color: '#ccc',
        },
        chipContainer: {
            backgroundColor: '#FCE4EC', 
            //borderColor: '#ccc',
        },
        chipText: {
            color: '#333333', 
        },
        chipIcon: {
            color: '#FF4081', 
        },
        chipIconContainer: {
            backgroundColor: '#FFFFFF', 
            borderColor: '#FF4081', 
        },
        chipWrapper: {
            margin: 2,
        },
        selectToggle: {
            borderColor: '#CCCCCC', 
            backgroundColor: '#FFFFFF', 
        },
        toggleIcon: {
            color: '#FF4081', 
        },
        confirmButtonText: {
            color: '#FFFFFF',
        },
        selectedItemIcon: {
            color: '#FF4081', 
        },
    },
});