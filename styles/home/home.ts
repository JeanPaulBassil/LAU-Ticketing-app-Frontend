import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginTop: 15,
        position: 'relative',
    },
    header_underline: {
        position: 'absolute',
        bottom: 12,
        left: 17,
        backgroundColor: '#005C07',
        width: 60,
        height: 2,
        borderRadius: 50,
    },
    headerText: {
        fontSize: 30,
        color: '#121420', 
    },
    addButton: {
        width: 120,
        height: 38,
        borderRadius: 3,
    },
    addButtonText: {
        fontSize: 18,
        color: 'white'
    },
    eventitem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15,
        marginTop: 10,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        height: 60,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
    },
    eventName: {
        fontSize: 20,
    },
    arrowIcon: {
        fontSize: 20,
        color: '#005C4A',
    },
    eventsList: {
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    datePickerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    dateInputButton: {
        marginBottom: 20,
        padding: 12,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#AAAAAA',
    },
    buttonDisabled: {
        opacity: 0.3,
    },
    errorTitle: {
        color: '#3D4852', 
        fontSize: 24,
        marginTop: 10,
        textAlign: 'center',
    },
    errorText: {
        color: '#3D4852', 
        fontSize: 18,
        marginHorizontal: 20,
        marginTop: 10,
        textAlign: 'center',
    },
    error_button_container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginTop: 25,
        maxWidth: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      error_button: {
        width: '100%',
        height: 50,
      },
    image: {
        width: "90%",
        height: 300,
        resizeMode: "contain",
        backgroundColor: '#f6f6f6',
    },
    loadingContainer: {
        flex: 1,
        // backgroundColor: 'red',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    loader: {
        marginTop: -60,
        transform: [{ scale: 1.3 }]
    },
    notFoundMessage: {
        fontSize: 20,
        color: 'grey',
    },
    errorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    errorImage: {
        width: "90%",
        height: 300,
        resizeMode: "contain",
        marginTop: -190,
    }
});

export default styles;