import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <View>
                <Text style={headerStyles.headerText}>YumCakes</Text>
            </View>
            {/* Hamburger Icon */}
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
    }
})