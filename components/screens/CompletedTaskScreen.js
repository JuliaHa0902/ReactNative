import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CompletedTaskScreen = props => {
    const { show, setShow, foregroundColor } = props

    return (
        <View>
            <TouchableOpacity
                style={ styles.menu }
                activeOpacity={ 0.1 }
                onPress={ () => setShow( !show ) }
            >
                <Ionicons name="menu" size={ 36 } style={ { color: foregroundColor } } />
            </TouchableOpacity>

            <View style={ styles.container }>
                <Text style={ { color: foregroundColor } }>Completed Task screen!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    menu: {
        position: 'absolute',
        alignSelf: 'flex-start',
        zIndex: 10,
        elevation: 10
    }
} );

export default CompletedTaskScreen