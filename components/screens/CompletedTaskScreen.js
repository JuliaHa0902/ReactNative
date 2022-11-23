import React from "react";
import { FlatList, View } from 'react-native';

import TaskItem from '../task/Item'

const CompletedTaskScreen = props => {
    const { mode, TaskData, setTaskData, foregroundColor, backgroundColor } = props

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

export default CompletedTaskScreen