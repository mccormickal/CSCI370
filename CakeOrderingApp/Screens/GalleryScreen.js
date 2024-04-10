import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';


const GalleryScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.columnContainer}>
                    {/* Image 1
                    <Image
                        source={require('')}
                        style={styles.image}
                    />
                    {/* Image 2 }
                    <Image
                        source={require('')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.columnContainer}>
                    {/* Image 3 }
                    <Image
                        source={require('')}
                        style={styles.image}
                    />
                    {/* Image 4 }
                    <Image
                        source={require('')}
                        style={styles.image}
                    /> */}
                </View>
            </ScrollView>
           <Footer/>
        </View>
    );
};

export default GalleryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 10,
    },
})