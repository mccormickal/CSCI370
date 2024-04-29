import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProgressBar = ({ progress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progress}%` }]} />
                <Text style={styles.progressText}>{`${progress}% Complete`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 20,
    },
    progressBarContainer: {
        width: '80%', 
        height: 20, 
        borderWidth: 1,
        borderColor: '#333333', 
        borderRadius: 10,
        backgroundColor: '#FFFFFF', 
    },
    progressBar: {
        height: '100%', 
        backgroundColor: '#333', 
        borderRadius: 10,
    },
    progressText: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
        color: '#333333',
    },
});

export default ProgressBar;