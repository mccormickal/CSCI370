import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import Header from '../components/Header';
import styles from '../styles';


const GalleryScreen = () => {
    // Declare state variables
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    // Declare images
    const imgs = [
        { id: '1', image: require('../images/Lilly-20th.jpg'), cake: 'Funfetti', icing: 'Vanilla'},
        { id: '2', image: require('../images/Alyssa-22ns.jpg'), cake: 'Chocolate', icing: 'Peanut Butter'},
        { id: '3', image: require('../images/Caroline-21.jpg'), cake: 'Vanilla', icing: 'Vanilla'},
        { id: '4', image: require('../images/Kristen-22.jpg'), cake: 'Red Velvet', icing: 'Cream Cheese'},
        { id: '5', image: require('../images/Pumpkin.jpg'), cake: 'Coconut', icing: 'Vanilla'},
        { id: '6', image: require('../images/Catie-21.jpg'), cake: 'Coconut', icing: 'Cream Cheese'},
        { id: '7', image: require('../images/Surf.jpg'), cake: 'Lemon', icing: 'Strawberry'},
        { id: '8', image: require('../images/Amanda-20.jpg'), cake: 'Chocolate', icing: 'Raspberry'},
        { id: '9', image: require('../images/Graduation.jpg'), cake: 'Lemon', icing: 'Raspberry'},
        { id: '10', image: require('../images/Kristen-21.jpg'), cake: 'Chocolate', icing: 'Chocolate'},
        { id: '11', image: require('../images/Flowers.jpg'), cake: 'Red Velvet', icing: 'Cream Cheese'},
        { id: '12', image: require('../images/Caroline-20.jpg'), cake: 'Vanilla', icing: 'Vanilla'},
        { id: '13', image: require('../images/Alyssa-21.jpg'), cake: 'Red Velvet', icing: 'Cream Cheese'},
    ];

    // const renderItem = ({ item }) => (
    //     <View style={galleryStyles.imageContainer}>
    //         <Image source={item.image} style={galleryStyles.image} />
    //         <Text style={galleryStyles.description}>
    //             {item.cake} Cake{'\n'}{item.icing} Icing
    //         </Text>
    //     </View>
    // )


    const renderItem = ({ item }) => (
        
            <View style={galleryStyles.imageContainer}>
                <TouchableOpacity
                    onPress={() => { setModalVisible(true); setSelectedImage(item.image); 
                }}>
                    <Image source={item.image} style={galleryStyles.image} />
                </TouchableOpacity>
                
                <Text style={galleryStyles.description}>
                    {item.cake} Cake{'\n'}{item.icing} Icing
                </Text>
            </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.stickyHeader}>
                <Header />
                <View style={styles.pageHeader}>
                    <Text style={styles.pageHeaderText}>Gallery</Text>
                </View>
            </View>
            <FlatList 
                data={imgs}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={galleryStyles.flatListContent}
            />
            {/* Modal that pops up when image is pressed */}
            
        </View>
    );
};

export default GalleryScreen;

const galleryStyles = StyleSheet.create({
    flatListContent: {
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginVertical: 20,
        borderRadius: 15,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 10,
        borderRadius: 15,
    },
    description: {
        textAlign: 'center',
        marginBottom: 5,
        color: '#333',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})