import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';

// grab styles from separate file
import Styles from './styles';

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
        <View style={ Styles.flex }>
            <Text style={ {
                color: props.foregroundColor
            } }>{ props.mode ? 'Night Mode' : 'Day Mode' }</Text>

            <Switch
                value={ props.mode }
                onValueChange={ switchToggle }
            />
        </View>
    );
}

export default Toggle
