import { StyleSheet } from "react-native"

export const DrawerStyles = StyleSheet.create( {
    background: {
        flex: 1
    },
    menu: {
        position: 'absolute',
        alignSelf: 'flex-start',
        zIndex: 10,
        elevation: 10
    },
    drawer: {
        position: 'absolute',
        height: '100%',
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 20,
        zIndex: 20,
        width: 200,
    },
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#333',
        opacity: 0.5,
        right: 0,
        zIndex: 19,
        elevation: 19
    }
} )