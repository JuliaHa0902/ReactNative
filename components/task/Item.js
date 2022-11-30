import React, { Component } from "react";
import { Alert, Text, View, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

// constant data for the item
import { AppData } from '../data/data'

// components
import { CustomButton } from './CustomButton'

// styles
import { ItemStyles } from './styles'

class TaskItem extends Component {
    state = {
        isOpened: false,
    };

    toggleRadioButton ( newVal, title ) {
        const { index, TaskData, setTaskData } = this.props

        const newTaskData = [ ...TaskData ]
        newTaskData[ index ].isDone = newVal

        const { label, radioButton } = AppData.alert.task
        if ( newVal ) {
            Alert.alert( `${ label } "${ title }"`, radioButton.added )
        }
        else {
            Alert.alert( `${ label } "${ title }"`,  radioButton.removed )
        }

        this.saveLocal( newTaskData );

        setTaskData( newTaskData )
    }

    saveLocal = async ( newTaskData ) => {
        await AsyncStorage.setItem(
            '@tasks',
            JSON.stringify( newTaskData )
        )
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
        const { deleteButton, label } = AppData.alert.task
        const { yes, no } = deleteButton.cancel

        const yesBtn = {
            text: yes,
            onPress: async () => {
                const oldData = [ ...this.props.TaskData ]
                const newData = []

                for ( let x = 0; x < oldData.length; x++ ) {
                    if ( x !== props.index ) {
                        newData.push( oldData[ x ] )
                    }
                }

                await AsyncStorage.setItem(
                    '@tasks',
                    JSON.stringify( newData )
                )

                this.props.setTaskData( newData )
            }
        }

        Alert.alert(
            `${ label } ${ title }`,
            deleteButton.dialog,
            [ yesBtn, { text: no } ],
            { cancelable: true }
        );
    }

    render () {
        // deconstruct
        const { title, description } = this.props.item
        const { TaskData, index, foregroundColor, backgroundColor } = this.props

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
                    ...ItemStyles.taskItem,
                    backgroundColor: foregroundColor
                } }>
                    <Checkbox
                        style={ {
                            ...ItemStyles.checkbox,
                            borderColor: backgroundColor
                        } }
                        value={ TaskData[ index ].isDone } // change this to what the data says
                        onValueChange={
                            ( newValue ) => this.toggleRadioButton( newValue, title )
                        }
                    />

                    {/* task title */ }
                    <View style={ ItemStyles.textCenter }>
                        <Text style={ {
                            color: backgroundColor,
                            fontWeight: 'bold',
                            fontSize: 16
                        } }>
                            { title }
                        </Text>
                    </View>


                    { // if task is clicked (open), then show: delete/edit
                        this.state.isOpened && (
                            <View>
                                { // if there's no description, then we shouldn't render it
                                description === '' ? 
                                    null :
                                    <View style={ { 
                                        ...ItemStyles.textCenter,
                                        paddingTop: 8
                                    } }>
                                        <Text
                                            numberOfLines={ 3 }
                                            style={ {
                                                color: backgroundColor,
                                                fontSize: 12,
                                                lineHeight: 16
                                            } }
                                        >
                                            { description }
                                        </Text>
                                    </View>
                                }

                                <View style={ ItemStyles.buttonContainer }>
                                    <CustomButton
                                        name={ AppData.taskButtons.delete }
                                        opacity={ this.props.mode ? 0.5 : 0.7 }
                                        style={ { 
                                            ...ItemStyles.button,
                                            backgroundColor: backgroundColor,
                                            borderColor: backgroundColor
                                        } }
                                        textStyle={ {
                                            color: foregroundColor
                                        } }
                                        onPress={ () => this.delete( this.props, title ) }
                                    />

                                    <CustomButton
                                        name={ AppData.taskButtons.edit }
                                        opacity={ this.props.mode ? 0.7 : 0.5 }
                                        style={ { 
                                            ...ItemStyles.button,
                                            backgroundColor: foregroundColor,
                                            borderColor: backgroundColor
                                        } }
                                        textStyle={ {
                                            color: backgroundColor
                                        } }
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