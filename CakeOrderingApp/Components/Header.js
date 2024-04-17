import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <Ionicons name='cake' size={24} color='black' style={headerStyles.icon}/>
            <View>
                <Text style={headerStyles.headerText}>YumCakes</Text>
            </View>
            <Ionicons name='menu' size={24} color='black' style={headerStyles.icon}/>
        </View>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    header: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
    },
    icon: {
        marginRight:  10,
    }
})