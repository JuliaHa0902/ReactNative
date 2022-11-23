import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CompletedTaskScreen = props => {
    const { show, setShow, TaskData, setTaskData, foregroundColor } = props

    const completedTasks = [ ...TaskData ].filter( task => task.isDone )

    // here is the completed tasks filtered from state
    console.log( completedTasks )

    let titles = ''
    completedTasks.forEach( ( task, index ) => {
        if( index + 1 !== completedTasks.length ) {
            titles += task.title + ', '
        }
        else {
            titles += task.title
        }
    } )

    console.warn( 'completed: ' + titles )

    // use setTaskData(), if you're adding/deleteing tasks from the completed screen

    return (
        <View>
            <TouchableOpacity
                style={ styles.menu }
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