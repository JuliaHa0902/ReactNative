import React from "react";
import {useState, useContext} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import AddModal from "../components/AddModal";
import TaskList from "../components/TaskList";
import { TasksContext } from "../context/TaskContext";

export default function Home({navigation}) {
    const {taskData} = useContext(TasksContext)
  
    return (
      <View style={styles.container}>
        <Text>This is Home!</Text>
        <TaskList/>
       
        {/* <Button
        title="Add Task "
        onPress={() => navigation.navigate('AddTask', {
            value: task,
        })} /> */}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });