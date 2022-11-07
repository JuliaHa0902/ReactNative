import React, {Component} from "react";
import { Alert, Button, Text, StyleSheet, View } from "react-native";
import Checkbox from 'expo-checkbox';
import taskData from "../data/data";
import {CustomButton} from '../components/CustomButton' 

export default class TaskItem extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            choosenRow: null,
            numberOfRefresh: 0
        };
        this.delete.bind(this.delete);
    }

    refreshList = () => {
        this.setState((prevState) => {
            return {
              numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }

    delete(props){
        Alert.alert(
            'Alert',
            'Are you sure you want to delete this task?',
            [
                { text: "No", onPress: () => console.log("Cancel"), style: 'cancel' },
                {
                    text: "Yes", onPress: () => {
                        console.log('s')
                        taskData.splice(this.props.index, 1);
                       
                         props.parentFlatList.refreshList(this.props.index);
                    }
                }
            ],
            { cancelable: true }
        );

    }

    edit(props){
        props.parentFlatList.editModalRef.showEditModal(this.props.index, taskData[this.props.index], this);
    }

    render() {
        return (
            <View style={styles.taskItem}>
                <Checkbox style={styles.checkbox}
                   

                    onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                <View style={styles.textCenter}>

                    <Text>{this.props.item.title}</Text>
                    <Text numberOfLines={3}>{this.props.item.description}</Text>

                </View>


                <View style={styles.bottonContainer}>

                    <CustomButton color="#000" name="Delete" onPress={() => this.delete(this.props)}
                        style={styles.deleteBtn}
                    />


                    <CustomButton color="#FFF" name="Edit" onPress={() => this.edit(this.props)}
                        style={styles.editBtn}
                    />
        
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    taskItem: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        margin: 10,
        padding: 20,
        height: 170,
        borderRadius: 20
         
    
    },

    bottonContainer: {

        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 60,
        marginBottom: 10
        
       

    },

    textCenter: {
        alignItems: 'center',
        
    },


    checkbox: {
     borderRadius: 10 
        
    }
    ,
    deleteBtn: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#4B4B4B',
        alignItems: 'center',
        
      
    },

    editBtn: {
        marginLeft: 20,
       
    },
})