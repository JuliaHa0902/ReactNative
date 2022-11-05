import React, {Component} from "react";
import { Alert, Button, Text, StyleSheet, View } from "react-native";
import taskData from "../data/data";
 

export default class TaskItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            choosenRow: null,
            numberOfRefresh: 0
        };
    }

    refreshList = () => {
        this.setState((prevState) => {
            return {
              numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }

    render() {
        return (
            <View style = {styles.taskItem}>
                <Text>{this.props.item.title}</Text>
                <Text>{this.props.item.description}</Text>
                <Button 
                    title="Delete" 
                    onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete this task?',
                            [
                                {text: "No", onPress: () => console.log("Cancel"), style: 'cancel'},
                                {text: "Yes", onPress: () => {
                                    taskData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshList(this.props.index);
                                }}
                            ],
                            {cancelable: true}
                        );
                    }}
                />
                <Button 
                    title="Edit" 
                    onPress={()=>{
                        this.props.parentFlatList.editModalRef.showEditModal (this.props.index, taskData[this.props.index], this);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    taskItem: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        marginBottom: 10,
    }
})