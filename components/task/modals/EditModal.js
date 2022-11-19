import React, { Component } from 'react';
import { Text, View, TextInput, Modal } from 'react-native';

// components
import { CustomButton } from '../CustomButton';

// styles
import TaskStyles from '../styles';

// data for the constant values that won't change
import { AppData } from '../../data/data'

class EditModal extends Component {
    state = {
        newTitle: "",
        newDescription: "",
        isOpen: false
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

    save = () => {
        if ( this.state.newTitle.length == 0 ) {
            alert( AppData.alert.task.noTitle );
            return;
        }

        var index = this.state.index;

        const data = [ ...this.props.TaskData ]

        data[ index ].title = this.state.newTitle;
        data[ index ].description = this.state.newDescription;

        this.props.setTaskData( data )

        this.setState( {
            newTitle: "",
            newDescription: "",
            isOpen: false
        } );
    }

    cancel = () => {
        this.setState( { isOpen: false } );
    }

    render () {
        const styles = TaskStyles.modal
        const { foregroundColor, backgroundColor } = this.props

        // deconstruct AppData from the add modal, since it's the same
        const { title, descTitle, button } = AppData.modal.add

        return (
            <Modal
                ref={ "myModal" }
                style={ styles.modal }
                visible={ this.state.isOpen }
                transparent={ true }
                onClosed={ () => {
                    alert( "Modal closed" );
                } }
            >
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
                            <Text style={ { color: backgroundColor } }>
                                { title }
                            </Text>

                            <TextInput
                                style={ {
                                    ...styles.textInput,
                                    borderColor: backgroundColor,
                                    color: backgroundColor
                                } }
                                onChangeText={
                                    text => this.setState( { newTitle: text } )
                                }
                                value={ this.state.newTitle }
                                autoFocus={ true }
                            />
                        </View>

                        <View>
                            <Text style={ { color: backgroundColor } }>
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
                                style={ {
                                    ...styles.button,
                                    borderColor: backgroundColor,
                                    backgroundColor: backgroundColor
                                } }
                                textStyle={ { color: foregroundColor } }
                                onPress={ this.cancel }
                            />

                            <CustomButton
                                name={ button.save }
                                style={ {
                                    ...styles.button,
                                    borderColor: backgroundColor,
                                    backgroundColor: foregroundColor
                                } }
                                textStyle={ { color: backgroundColor } }
                                onPress={ this.save }
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default EditModal