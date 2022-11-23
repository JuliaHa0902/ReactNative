import { StyleSheet } from "react-native";

// other styles that are broken into their own file
import ModalStyles from './modals/styles'

// task styles all in one place
// by doing this we can re-use our styles (less typing)
export const ItemStyles = StyleSheet.create( {
    taskItem: {
        directiona: 'row',
        margin: 10,
        padding: 20,
        borderRadius: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    textCenter: {
        alignItems: 'center',
    },

    checkbox: {
        position: 'absolute',
        margin: 10,
        borderRadius: 10,
    },

    button: {
        width: '45%',
        paddingHorizontal: 8,
        borderWidth: 2
    }
} )

export const CustomButtonStyles = StyleSheet.create( {
    button: {
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
} )

const TaskStyles = StyleSheet.create( {
    item: ItemStyles,
    modal: ModalStyles,
    customButton: CustomButtonStyles
} )
export default TaskStyles