import React from 'react'
import { View, Text } from "react-native"
import { Drawer, Switch } from 'react-native-paper';

// drawer items
const DrawerFlyout = ( props ) => {
    const {
        mode,
        setMode,
        active,
        setActive,
        setShow,
        foregroundColor,
        setForegroundColor,
        backgroundColor,
        setBackgroundColor,
    } = props

    const switchToggle = () => {
        // night mode
        if ( mode ) {
            setBackgroundColor( '#fff' );
            setForegroundColor( '#333' );
        }
        // day mode
        else {
            setBackgroundColor( '#333' );
            setForegroundColor( '#fff' );
        }

        // toggle
        setMode( !mode );
    }

    return (
        <Drawer.Section
            title={ <Text style={ { color: foregroundColor } }> Menu </Text> }
            style={ { backgroundColor: backgroundColor, direction: 'row', width: '100%' } }
        >
            <Drawer.Item label={
                <View>
                    <Text style={ {
                        color: foregroundColor
                    } }>{ mode ? 'Night Mode' : 'Day Mode' }</Text>

                    <Switch
                        value={ mode }
                        onValueChange={ switchToggle }
                    />
                </View>
            } />

            <Drawer.Item
                label={ <Text style={ { color: foregroundColor } }> TODO </Text> }
                active={ active === 'TODO' }
                onPress={ () => {
                    setActive( 'TODO' )
                    setShow( false )
                } }
            />
            <Drawer.Item
                label={ <Text style={ { color: foregroundColor } }> COMPLETE </Text> }
                active={ active === 'COMPLETE' }
                onPress={ () => {
                    setActive( 'COMPLETE' )
                    setShow( false )
                } }
            />
        </Drawer.Section>
    )
}

export default DrawerFlyout