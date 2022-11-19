import React, { Component } from "react";
import { Alert, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';

// components
import { CustomButton } from './CustomButton'

class TaskItem extends Component {
    state = {
        isOpened: false,
    };

    toggleRadioButton ( newVal, title ) {
        const { index, TaskData, setTaskData } = this.props

        const newTaskData = [ ...TaskData ]
        newTaskData[ index ].isDone = newVal

        setTaskData( newTaskData )
    }

    edit ( props ) {
        const { showEditModal } = props.editModalRef.current

        showEditModal(
            props.index,
            props.TaskData[ props.index ],
            props
        );
    }

    delete ( props, title ) {
        const yes = {
            text: "Yes",
            onPress: () => {
                const oldData = [ ...this.props.TaskData ]
                const newData = []

                for ( let x = 0; x < oldData.length; x++ ) {
                    if ( x !== props.index ) {
                        newData.push( oldData[ x ] )
                    }
                }

                this.props.setTaskData( newData )
            }
        }

        const no = {
            text: "No",
            style: 'cancel',
            onPress: () => console.warn( "Cancel" )
        }

        Alert.alert(
            'Alert',
            'Are you sure you want to delete this task? "' + title + '"',
            [ yes, no ],
            { cancelable: true }
        );
    }

    render () {
        // deconstruct
        const { title, description } = this.props.item
        const { TaskData, index } = this.props

        return (
            <TouchableOpacity
                activeOpacity={ 0.7 }
                onPress={ () => {
                    this.setState( {
                        isOpened: !this.state.isOpened
                    } )
                } }
            >
                <View style={ {
                    ...styles.taskItem,
                    backgroundColor: this.props.foregroundColor
                } }>
                    <Checkbox
                        style={ { 
                            ...styles.checkbox, 
                            borderColor: this.props.backgroundColor
                        } }
                        value={ TaskData[ index ].isDone } // change this to what the data says
                        onValueChange={
                            ( newValue ) => this.toggleRadioButton( newValue, title )
                        }
                    />

                    {/* task title */ }
                    <View style={ styles.textCenter }>
                        <Text style={ { 
                            color: this.props.backgroundColor,
                            fontWeight: 'bold',
                            fontSize: 16
                        } }>
                            { title }
                        </Text>
                    </View>


                    { // if task is clicked (open), then show: delete/edit
                        this.state.isOpened && (
                            <View>
                                <View style={ styles.textCenter }>
                                    <Text
                                        numberOfLines={ 3 }
                                        style={ { 
                                            color: this.props.backgroundColor,
                                            fontSize: 12
                                        } }
                                    >
                                        { description }
                                    </Text>
                                </View>

                                <View style={ styles.buttonContainer }>
                                    <CustomButton
                                        color="#000"
                                        name="Delete"
                                        opacity={ this.props.mode ? 0.5 : 0.7 }
                                        style={ styles.deleteBtn }
                                        onPress={ () => this.delete( this.props, title ) }
                                    />

                                    <CustomButton
                                        color="#FFF"
                                        name="Edit"
                                        opacity={ this.props.mode ? 0.7: 0.5 }
                                        style={ styles.editBtn }
                                        onPress={ () => this.edit( this.props ) }
                                    />
                                </View>
                            </View>
                        )
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

export default TaskItem

const styles = StyleSheet.create( {
    taskItem: {
        directiona: 'row',
        margin: 10,
        padding: 20,
        borderRadius: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },

    textCenter: {
        alignItems: 'center',
    },

    checkbox: {
        position: 'absolute',
        margin: 10,
        borderRadius: 10,
    },

    deleteBtn: {
        alignItems: 'center',
        color: '#000',
        backgroundColor: '#FFF',
        borderColor: '#333',
        borderWidth: 1,
    },

    editBtn: {
        marginLeft: 20,
    },
} )