import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

// styles
import TaskStyles from './styles'

export function CustomButton ( props ) {
    return (
        <TouchableOpacity
            onPress={ props.onPress }
            style={ { ...TaskStyles.customButton.button, ...props.style } }
            activeOpacity={ props.opacity }
        >
            <Text style={ { ...props.textStyle, ...TaskStyles.customButton.buttonText } }>
                { props.name }
            </Text>
        </TouchableOpacity>
    )
}