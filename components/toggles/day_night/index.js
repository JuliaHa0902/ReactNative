import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';

const Toggle = ( props ) => {
    const switchToggle = () => {
        // night mode
        if ( props.mode ) {
            props.setBackgroundColor( '#fff' );
            props.setForegroundColor( '#333' );
        }
        // day mode
        else {
            props.setBackgroundColor( '#333' );
            props.setForegroundColor( '#fff' );
        }

        // toggle
        props.setMode( !props.mode );
    }

    return (
        <>
            <Text style={ {
                color: props.foregroundColor
            } }>{ props.mode ? 'Night Mode' : 'Day Mode' }</Text>

            <Switch
                value={ props.mode }
                onValueChange={ switchToggle }
            />
        </>
    );
}

export default Toggle
