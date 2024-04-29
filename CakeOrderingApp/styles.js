import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCE4EC',
    },
    stickyHeader: {
        // backgroundColor: '#FFFFFF',
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    pageHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        // borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#BA68C8',
    },
    pageHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF', /* White text color */
    },
    contentContainer: {
        alignItems: 'center',
        padding: 20,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
     },
    button: {
        backgroundColor: '#BA68C8',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    goBackButton: {
        marginRight: 10,
    },
    nextButton: {
        marginLeft: 10,
    },
    sectionHeader: {
        fontSize:20,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    formContainer: {
        padding: 20,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#333333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        color: '#333333',
    },
});

export default styles;