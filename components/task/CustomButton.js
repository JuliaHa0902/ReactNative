import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function CustomButton ( props ) {
    return (
        <TouchableOpacity
            onPress={ props.onPress }
            style={ [ styles.button, { ...props.style } ] }
            activeOpacity={ props.opacity }
        >
            <Text style={ [ { color: props.color }, styles.buttonText ] }>
                { props.name }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
    button: {
        borderRadius: 15,
        height: 40,
        width: 110,
        backgroundColor: '#4B4B4B',
        alignItems: 'center',
        padding: 8,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
} )