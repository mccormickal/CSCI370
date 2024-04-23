import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigation/TabNavigator';

const Footer = () => {
    return (
        <View>
            <TabNavigator/>
        </View>
    );
}

export default Footer;