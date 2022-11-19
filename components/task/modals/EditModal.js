import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Modal
} from 'react-native';

// components
import { CustomButton } from '../CustomButton';

class EditModal extends Component {
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


    showEditModal = ( index, item, itemObject ) => {
        this.setState( {
            newTitle: item.title,
            newDescription: item.description,
            index: index,
            isOpen: true,
            itemObject: itemObject
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
            isDone: "false"
        };

        var index = this.state.index;

        const data = [ ...this.props.TaskData ]

        data[ index ].title = this.state.newTitle;
        data[ index ].description = this.state.newDescription;

        this.props.setTaskData( data )

        this.setState( { isOpen: false } );
    }


    cancel () {
        this.setState( { isOpen: false } );

    }



    render () {
        return (
            <Modal
                ref={ "myModal" }
                style={ styles.modal }
                visible={ this.state.isOpen }
                position='center'
                transparent={ true }
                onClosed={ () => {
                    alert( "Modal closed" );
                } }
            >
                <View style={ styles.centerModal }>
                    <View style={ styles.modalContent }>
                        <View>
                            <Text>Title</Text>

                            <TextInput
                                style={ styles.textInput }
                                placeholder="Enter task"
                                onChangeText={
                                    text => this.setState( { newTitle: text } )
                                }
                                value={ this.state.newTitle }
                                autoFocus={ true }
                            />
                        </View>

                        <View>
                            <Text>Description</Text>

                            <TextInput
                                style={ styles.textInput }
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

export default EditModal

const styles = StyleSheet.create( {
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