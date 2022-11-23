import React, { Component } from 'react';
import { Text, View, TextInput, Modal } from 'react-native';

// components
import { CustomButton } from '../CustomButton';

// styles
import TaskStyles from '../styles';

// data for the constant values that won't change
import { AppData } from '../../data/data'

class AddModal extends Component {
    state = {
        newTitle: "",
        newDescription: "",
        isOpen: false,
    }

    showAddModal = () => {
        this.setState( {
            isOpen: true
        } );
    }

    save = () => {
        const { noTitle } = AppData.alert.task

        // '===' strict type checking is a good thing
        if ( this.state.newTitle.length === 0 ) {
            alert( noTitle );
            return;
        }

        const newTask = {
            title: this.state.newTitle,
            description: this.state.newDescription,
            isDone: false
        };

        const newData = [ ...this.props.TaskData, newTask ]

        this.props.setTaskData( newData )
        this.setState( { isOpen: false } );
    }

    // reset state of the new task
    cancel = () => {
        this.setState( {
            newTitle: "",
            newDescription: "",
            isOpen: false,
        } );
    }

    boxContent = () => {
        // deconstruct AppData for the add modal
        const { title, descTitle, button } = AppData.modal.add

        const { foregroundColor, backgroundColor } = this.props

        // pull styles from import
        const styles = TaskStyles.modal

        return (
            <View style={ styles.centerModal }>
                <View style={ {
                    ...styles.modalContent,
                    backgroundColor: foregroundColor,
                    shadowColor: backgroundColor
                } }>
                    <Text style={ { 
                        color: backgroundColor,
                        fontSize: 18,
                        fontWeight: 'bold'
                    } }>
                        { AppData.alert.task.label }
                    </Text>
                    <View>
                        <Text style={ {
                            ...styles.label,
                            color: backgroundColor,
                        } }>
                            { title }
                        </Text>
                        <TextInput
                            style={ {
                                ...styles.textInput,
                                color: backgroundColor,
                                borderColor: backgroundColor
                            } }
                            onChangeText={
                                ( text ) => this.setState( { newTitle: text } )
                            }
                            value={ this.state.newTitle }
                            autoFocus={ true }
                        />
                    </View>

                    <View>
                        <Text style={ {
                            ...styles.label,
                            color: backgroundColor
                        } }>
                            { descTitle }
                        </Text>

                        <TextInput
                            style={ {
                                ...styles.textInput,
                                ...styles.textInput_description,
                                borderColor: backgroundColor,
                                color: backgroundColor
                            } }
                            onChangeText={
                                text => this.setState( { newDescription: text } )
                            }
                            value={ this.state.newDescription }
                            multiline={ true }
                        />
                    </View>

                    <View style={ styles.bottonContainer }>
                        <CustomButton
                            name={ button.cancel }
                            onPress={ this.cancel }
                            style={ { 
                                ...styles.button,
                                backgroundColor: backgroundColor,
                                borderColor: backgroundColor
                            } }
                            textStyle={ { color: foregroundColor } }
                        />

                        <CustomButton
                            name={ button.save }
                            onPress={ this.save }
                            style={ { 
                                ...styles.button,
                                backgroundColor: foregroundColor,
                                borderColor: backgroundColor
                            } }
                            textStyle={ { color: backgroundColor } }
                        />
                    </View>
                </View>
            </View>
        )
    }

    render () {
        return (
            <Modal
                ref={ "myModal" }
                animationType="slide"
                transparent={ true }
                visible={ this.state.isOpen }
            >
                { this.boxContent() }
            </Modal>

        );
    }
}

export default AddModal
