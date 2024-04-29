import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Header = () => {
    const navigation = useNavigation(); 

    // Handle navigation to Home when Cake Icon is pressed
    const handleIcon = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.headerText}>Cakes by Maddux</Text>
            <TouchableOpacity 
                style={headerStyles.iconContainer}
                onPress={handleIcon}>
                <MaterialIcons name="cake" size={24} color='#fff' />
            </TouchableOpacity>
            {/* <View style={headerStyles.iconContainer}>
                <Ionicons name='menu' size={24} color='#fff' style={headerStyles.icon}/>
            </View> */}
        </View>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#FF69B4',
        paddingTop: 50,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
    },
    icon: {
        //marginRight:  10,
    }
})