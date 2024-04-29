import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import styles from '../styles';


const HomeScreen = () => {
    // Initialize navigation
    const navigation = useNavigation();

    // Handle navigation to OrderScreen1 when "Order Now" is pressed
    const handleOrderNow = () => {
        navigation.navigate('OrderScreen');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.stickyHeader}>
                <Header />
                <View style={styles.pageHeader}>
                    <Text style={styles.pageHeaderText}>Home</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={homeStyles.headerContainer}>
                    <Text style={homeStyles.header}>Cakes by Maddux</Text>
                    <MaterialIcons name="cake" size={24} color='#FF69B4' />
                </View>
                <Image
                    style={homeStyles.homeImage}
                    source={require('../images/home-cakes.png')}>
                </Image>
                <Text style={homeStyles.bodyText}>
                    Welcome to Cakes by Maddux, your go-to app for ordering delicious cakes 
                    delivered right to your doorstep! Indulge in our delectable selection of 
                    cakes baked with love and care by our expert bakers. Whether it's a 
                    birthday celebration, anniversary, or just a sweet craving, our wide range 
                    of flavors and designs ensures there's something for everyone. Place your 
                    order today and treat yourself to a slice of happiness with Cakes by Maddux!
                </Text>


                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleOrderNow}
                    >
                        <Text style={styles.buttonText}>Order Now!</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
};

export default HomeScreen;

const homeStyles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: 8,
        color: '#333',
    },
    homeImage: {
        resizeMode: 'contain',
        height: 150,
        marginTop: 10,
    },
    bodyText: {
        fontSize: 16,
        marginTop: 30,
        marginBottom: 30,
        textAlign: 'center',
        width: '90%',
        color: '#333',
    },
});