import React from "react";
import {useReducer} from 'react';
import { LogBox } from 'react-native';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function AddTask({navigation}) {  
    const initTask = { title: "", description: "", isDone: false};
    const [task, updateTask] = useReducer(
      (task, updates) => ({ ...task, ...updates }),
      initTask
    );
    return (
      <View style={styles.container}>
        <Text>Add Task screen!</Text>
        <Text>Title</Text>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => updateTask({ title: text })} />
        {/* <Text>{task.title}</Text> */}
        <Text>description</Text>
        <TextInput style={styles.input} placeholder={'Write description'} value={task} onChangeText={text => updateTask({ description: text })} />
        <Button
        title="Home"
        onPress={() => navigation.navigate('Home', {
            title: task.title,
            description: task.description,
          })} />
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