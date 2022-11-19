import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Modal } from 'react-native';

// components
import { CustomButton } from '../CustomButton';

// data for the constant values that won't change
import { AppData } from '../../data/data'

class AddModal extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            newTitle: "",
            newDescription: "",
            isOpen: false,
        };

        this.save = this.save.bind( this );
        this.cancel = this.cancel.bind( this );
    }

    showAddModal = () => {
        this.setState( {
            isOpen: true
        } );
    }

    save () {
        const { noTaskTitle } = AppData.modal.add.alert

        // '===' strict type checking is a good thing
        if ( this.state.newTitle.length === 0 ) {
            alert( noTaskTitle );
            return;
        }

        const newTask = {
            title: this.state.newTitle,
            description: this.state.newDescription,
            isDone: "false"
        };

        const newData = [ ...this.props.TaskData, newTask ]

        this.props.setTaskData( newData )
        this.setState( { isOpen: false } );
    }

    cancel () {
        this.setState( { isOpen: false } );
    }

    boxContent = () => {
        // deconstruct AppData for the add modal
        const {
            title,
            titlePlaceholder,
            descTitle,
            descPlaceholder,
            button
        } = AppData.modal.add

        const { backgroundColor } = this.props

        return (
            <View style={ styles.centerModal }>
                <View style={ { 
                    ...styles.modalContent, 
                    backgroundColor: backgroundColor 
                } }>
                    <View>
                        <Text style={ styles.label }>{ title }</Text>
                        <TextInput
                            style={ styles.textInput }
                            placeholder={ titlePlaceholder }
                            onChangeText={
                                ( text ) => this.setState( { newTitle: text } )
                            }
                            value={ this.state.newTitle }
                            autoFocus={ true }
                        />
                    </View>

                    <View>
                        <Text style={ styles.label }>
                            { descTitle }
                        </Text>

                        <TextInput
                            style={ [
                                styles.textInput,
                                styles.textInput_description
                            ] }
                            placeholder={ descPlaceholder }
                            onChangeText={
                                text => this.setState( { newDescription: text } )
                            }
                            value={ this.state.newDescription }
                            multiline={ true }
                        />
                    </View>

                    <View style={ styles.bottonContainer }>
                        <CustomButton
                            color="#000"
                            name={ button.cancel }
                            onPress={ this.cancel }
                            style={ styles.button }
                        />

                        <CustomButton
                            name={ button.save }
                            color="#FFF"
                            onPress={ this.save }
                            style={ styles.button }
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

const styles = StyleSheet.create( {
    modalContent: {
        width: '80%',
        height: 380,
        paddingHorizontal: 20,
        borderRadius: 16,
        elevation: 30,
        justifyContent: 'space-evenly'
    },

    centerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    label: {
        fontSize: 20,
        fontWeight: 'normal',
    },

    textInput: {
        borderWidth: 2,
        width: '100%',
        borderRadius: 4,
        padding: 8,
        marginTop: 8,
    },

    textInput_description: {
        height: 100,
        textAlignVertical: 'top',
    },

    button: {
        width: '45%'
    }
} )