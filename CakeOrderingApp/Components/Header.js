import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <View style={headerStyles.iconContainer}>
                <MaterialIcons name="cake" size={24} color='#FFFFFF' />
            </View>
            <Text style={headerStyles.headerText}>Cakes by Maddux</Text>
            <View style={headerStyles.iconContainer}>
                <Ionicons name='menu' size={24} color='#FFFFFF' style={headerStyles.icon}/>
            </View>
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
        //marginTop: 30,
        backgroundColor: '#FF69B4',
        paddingTop: 50,
        marginBottom: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333333',
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
    },
    icon: {
        //marginRight:  10,
    }
})