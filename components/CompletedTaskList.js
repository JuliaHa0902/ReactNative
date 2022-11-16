import React, {Component, useContext} from "react";
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import taskData from "../data/data";
import EditModal from "./EditModal";
import { AntDesign } from '@expo/vector-icons'; 
import { Dimensions } from "react-native";
import  TaskItem  from './TaskItem';
import {AddModal} from "./AddModal";
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class CompletedTaskList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deletedRow: null
        };
        // console.log (this.props.taskData);
    }

    refreshList = (deletedRowId) => {
        this.setState((prevState) => {
            return {
                deletedRow: deletedRowId
            };
        });
    }

    render() {
        return (
            <View style = {styles.taskListView}>
                <FlatList
                    data={taskData}
                    renderItem={({item, index})=>{
                          console.log(JSON.stringify(item));
                        return (
                            <TaskItem completed={true} item={item} index={index} parentFlatList={this} />
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
        height: height,
        width: width,
      
 
 
    },

    flatButton: {
       width: 60,
       height: 60,
       backgroundColor: '#4B4B4B',
       borderRadius: 100,
       bottom: 0,
       right: 0,
       marginRight: 35,
       position:'absolute',
       display: 'flex',
       marginBottom: 30,
       alignItems: 'center',
       justifyContent:'center',
       padding: 1,
       zIndex: 1 // this makes it clickable (it is not clickable due to absolute position)
     
    } 
    
})