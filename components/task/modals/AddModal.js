import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Modal } from 'react-native';

// components
import { CustomButton } from '../CustomButton';

class AddModal extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            newTitle: "",
            newDescription: "",
            isOpen: false
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
        if ( this.state.newTitle.length == 0 ) {
            alert( "You must enter a task name" );
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

    cancel () {
        this.setState( { isOpen: false } );

    }

    render () {
        return (
            <Modal
                ref={ "myModal" }
                animationType="slide"
                transparent={ true }
                visible={ this.state.isOpen }
            >
                <View style={ styles.centerModal }>
                    <View style={ styles.modalContent }>
                        <View>
                            <View  style={ styles.header }>
                                <Text  style={ styles.headerLabel }>Add Task</Text>
                            </View>
                            <Text style={ styles.label }>Title</Text>
                            <TextInput
                                style={ styles.textInput }
                                placeholder="Enter task"
                                onChangeText={
                                    ( text ) => this.setState( { newTitle: text } )
                                }
                                value={ this.state.newTitle }
                                autoFocus={ true }
                            />
                        </View>

                        <View>
                            <Text style={ styles.label }>
                                Description
                            </Text>

                            <TextInput
                                style={ [
                                    styles.textInput,
                                    styles.textInput_description
                                ] }
                                placeholder="Enter description"
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
                                name="Cancel"
                                onPress={ this.cancel }
                                style={ styles.cancelBtn }
                            />

                            <CustomButton
                                name="Save"
                                color="#FFF"
                                onPress={ this.save }
                                style={ styles.saveBtn }
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        );
    }
}

export default AddModal

const styles = StyleSheet.create( {
    header: {
        alignItems: 'center',
        marginRight: 60,
        marginBottom: 10,
    },

    headerLabel:{
        fontSize: 18,
        fontWeight: 'semibold',
    },

    modalContent: {
        width: 340,
        height: 380,
        backgroundColor: '#D9D9D9',
        paddingLeft: 40,
        borderRadius: 20,
        justifyContent: 'space-evenly'
    },

    centerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    label: {
        fontSize: 20,
        fontWeight: 'normal',
    },

    textInput: {
        borderWidth: 2,
        width: '80%',
        borderRadius: 4,
        padding: 8,
        marginTop: 8,
    },

    textInput_description: {
        height: 100,
        textAlignVertical: 'top',
    },

    saveBtn: {
        marginLeft: 20,
    },

    cancelBtn: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#4B4B4B'
    },
} )