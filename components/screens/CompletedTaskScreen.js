import React, { useRef } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//components
import TaskItem from '../task/Item'
import EditModal from "../task/modals/EditModal";

const CompletedTaskScreen = props => {
    const { show, setShow, foregroundColor } = props
    const editModalRef = useRef( null )

    const addTask = () => {        
        addModalRef.current.showAddModal( props.TaskData )
    }

    return (
        <View style={ styles.container }>
            <FlatList
                data={ props.TaskData }
                style={ { width: '100%' } }
                renderItem={ ( { item, index } ) => {
                    if (item.isDone == true) {
                        return (
                            <TaskItem
                                index={ index }
                                TaskData={ props.TaskData }
                                setTaskData={ props.setTaskData }
                                item={ item }
                                foregroundColor={ props.foregroundColor }
                                backgroundColor={ props.backgroundColor }
                                parentFlatList={ this }
                                editModalRef={ editModalRef }
                            />
                        );
                    } else {
                        return (<></>);
                    }
                } 
            }
            />
        </View>
    );
            {/* add/edit buttons on clickable task */ }
            <EditModal
                ref={ editModalRef }
                parentList={ this }
                TaskData={ props.TaskData }
                setTaskData={ props.setTaskData }
            />
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 59
    },
    menu: {
        position: 'absolute',
        alignSelf: 'flex-start',
        zIndex: 10,
        elevation: 10
    }
} );

export default CompletedTaskScreen