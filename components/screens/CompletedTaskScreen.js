import React from "react";
import { StyleSheet, FlatList, View } from 'react-native';

import TaskItem from '../task/Item'

const CompletedTaskScreen = props => {
    const { TaskData, setTaskData, foregroundColor } = props

    return (
        <View>
            {/* list of tasks.. */ }
            <FlatList
                data={ TaskData }
                style={ { width: '100%', paddingTop: 40 } }
                renderItem={ ( { item, index } ) => {
                    if( item.isDone ) {
                        return (
                            <TaskItem
                                index={ index }
                                TaskData={ TaskData }
                                setTaskData={ setTaskData }
                                item={ item }
                                mode={ mode }
                                foregroundColor={ foregroundColor }
                                backgroundColor={ backgroundColor }
                                parentFlatList={ this }
                            />
                        );
                    }
                } }
            />
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