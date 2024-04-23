import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RNPickerSelect from 'react-native-picker-select';
import TabNavigator from '../navigation/TabNavigator';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Home</Text>
                <Image
                    style={styles.image}
                    source={require('../images/kitchen_img.jpg')}>
                </Image>
                <Text style={styles.bodyText}>
                    Welcome to YumCakes, your one-stop destination for delicious cakes delivered right to your 
                    doorstep! Indulge in our delectable selection of cakes baked with love and care by our expert 
                    bakers. Whether it's a birthday celebration, anniversary, or just a sweet craving, our wide 
                    range of flavors and designs ensures there's something for everyone. Place your order today 
                    and treat yourself to a slice of happiness with YumCakes!
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("Order")
                    }}
                >
                    <Text style={styles.buttonText}>Order Now!</Text>
                </TouchableOpacity>
            </View>
            {/* <Footer/> */}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: 175,
        marginTop: 10,
    },
    bodyText: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'justify',
        width: 300,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 40,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    }
})