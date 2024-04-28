import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import styles from '../styles';


const HomeScreen = () => {
    const navigation = useNavigation(); // Initialize navigation

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
                <Image
                    style={homeStyles.homeImage}
                    source={require('../images/kitchen_img.jpg')}>
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
    
    homeImage: {
        resizeMode: 'contain',
        height: 175,
        marginTop: 10,
    },
    bodyText: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'justify',
        width: '80%',
        color: '#333',
    },
});