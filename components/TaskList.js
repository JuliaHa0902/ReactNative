import React, {Component, useContext} from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import taskData from "../data/data";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

class TaskItem extends Component {
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

export default class TaskList extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            deletedRow: null
        };
        this._onPressAdd = this._onPressAdd.bind(this);
        // console.log (this.props.taskData);
    }

    refreshList = (deletedRowId) => {
        this.setState((prevState) => {
            return {
                deletedRow: deletedRowId
            };
        });
    }

    _onPressAdd() {
        this.addModalRef.showAddModal(this.props.taskData);
    }

    render() {
        return (
            <View style = {styles.taskListView}>
                <Button
                title="Add Task "
                onPress={this._onPressAdd} />
                <FlatList
                    data={taskData}
                    renderItem={({item, index})=>{
                        // console.log(JSON.stringify(item));
                        return (
                            <TaskItem item={item} index={index} parentFlatList={this}/>
                        );
                    }}
                />
                <AddModal ref = {ref => (this.addModalRef = ref)} parentList = {this}/>
                <EditModal ref = {ref => (this.editModalRef = ref)} parentList = {this}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    taskListView: {
        flex: 1,
        marginTop: 22,
    },
    taskItem: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        marginBottom: 10,
    }
})