import React, { useRef } from "react";
import {
    FlatList,
    StyleSheet,
    View,
    TouchableOpacity
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

// components
import TaskItem from '../task/Item'
import AddModal from "../task/modals/AddModal";
import EditModal from "../task/modals/EditModal";

const ToDoTaskScreen = props => {
    const addModalRef = useRef( null )
    const editModalRef = useRef( null )

    const addTask = () => {        
        addModalRef.current.showAddModal( props.TaskData )
    }

    return (
        <View style={ styles.container }>
            {/* list of tasks.. */ }
            <FlatList
                data={ props.TaskData }
                style={ { width: '100%' } }
                renderItem={ ( { item, index } ) => {
                    return (
                        <TaskItem
                            index={ index }
                            TaskData={ props.TaskData }
                            setTaskData={ props.setTaskData }
                            item={ item }
                            mode={ props.mode }
                            foregroundColor={ props.foregroundColor }
                            backgroundColor={ props.backgroundColor }
                            parentFlatList={ this }
                            addModalRef={ addModalRef }
                            editModalRef={ editModalRef }
                        />
                    );
                } }
            />

            {/* + button on the bottom-right */ }
            <TouchableOpacity
                style={ { 
                    ...styles.flatButton, 
                    backgroundColor: props.foregroundColor 
                } }
                onPress={ addTask }
                activeOpacity={ 0.7 }
            >
                <AntDesign 
                    name="plus" 
                    size={ 24 } 
                    style={{ color: props.backgroundColor }}
                />
            </TouchableOpacity>

            {/* add/edit buttons on clickable task */ }
            <AddModal
                ref={ addModalRef }
                parentList={ this }
                TaskData={ props.TaskData }
                setTaskData={ props.setTaskData }
                backgroundColor={ props.backgroundColor }
                foregroundColor={ props.foregroundColor }
            />
            <EditModal
                ref={ editModalRef }
                parentList={ this }
                TaskData={ props.TaskData }
                setTaskData={ props.setTaskData }
                backgroundColor={ props.backgroundColor }
                foregroundColor={ props.foregroundColor }
            />
        </View>
    )
}

export default ToDoTaskScreen

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 39
    },

    flatButton: {
        width: 60,
        height: 60,
        borderRadius: 100,
        bottom: 0,
        right: 0,
        marginRight: 35,
        position: 'absolute',
        display: 'flex',
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    }
} )