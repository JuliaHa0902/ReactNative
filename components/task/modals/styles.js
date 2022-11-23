import { StyleSheet } from "react-native";

const ModalStyles = StyleSheet.create( {
    centerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        width: '80%',
        height: 340,
        paddingHorizontal: 20,
        borderRadius: 16,
        elevation: 30,
        justifyContent: 'space-evenly'
    },

    bottonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    label: {
        fontSize: 16,
        fontWeight: 'normal',
    },

    textInput: {
        borderWidth: 2,
        width: '100%',
        borderRadius: 4,
        padding: 8,
    },

    textInput_description: {
        height: 100,
        textAlignVertical: 'top',
    },

    button: {
        width: '45%',
        borderWidth: 2
    }
} )

export default ModalStyles