import React, {Component, useState} from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Dimensions, Platform, Button} from 'react-native';
import { Modal } from 'react-native';
import taskData from '../data/data';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super (props);
        this.state = {
            newTitle: "",
            newDescription: "",
            isOpen: false,
        };
    }
    

    showEditModal = (index, item, itemObject) => {
        // this.refs.myModal.open();
        this.setState({
            newTitle: item.title,
            newDescription: item.description,
            index : index,
            isOpen: true,
            itemObject: itemObject
        });
    }
    render() {
        return (
            <Modal 
                ref = {"myModal"} 
                style = {styles.modal} 
                visible = {this.state.isOpen}
                position = 'center' 
                backdrop = {true} 
                onClosed = {()=>{
                    alert ("Modal closed");
                }}
            >
                <Text>Edit Task</Text>
                <TextInput 
                    style = {styles.textInput} 
                    placeholder = "Enter task"
                    onChangeText={(text)=>this.setState({newTitle: text})}
                    value={this.state.newTitle}
                />
                 <TextInput 
                    style = {styles.textInput} 
                    placeholder = "Enter description"
                    onChangeText={(text)=>this.setState({newDescription: text})}
                    value={this.state.newDescription}
                />
                <Button  
                    title="Save" 
                    onPress={()=>{
                        if (this.state.newTitle.length == 0) {
                            alert ("You must enter a task name");
                            return;
                        }
                        const newTask = {
                            title: this.state.newTitle,
                            description: this.state.newDescription,
                            isDone: "false"
                        };
                        var index = this.state.index;
                        console.log(index);
                        taskData[index].title = this.state.newTitle;
                        taskData[index].description = this.state.newDescription;
                        this.state.itemObject.refreshList();
                        this.setState({isOpen: false});
                        
                    }} />
    
            </Modal>
        ); 
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        borderRadius: 30,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 180,

    },
    textInput:{

    }

})