import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
//import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <View style={headerStyles.iconContainer}>
                <MaterialIcons name="cake" size={24} color="black" />
            </View>
            <Text style={headerStyles.headerText}>YumCakes</Text>
            <View style={headerStyles.iconContainer}>
                <Ionicons name='menu' size={24} color='black' style={headerStyles.icon}/>
            </View>
        </View>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        //height: '18%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
        backgroundColor: '#ddd',
        paddingTop: 10,
        marginBottom: 20,
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