import React from "react";
import {useReducer} from 'react';
import { LogBox } from 'react-native';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Home from "./Home";
import TaskList from "../components/TaskList";
import CompletedTaskList from "../components/CompletedTaskList";

export default function CompletedTask({navigation}) {  
  
    return (
      <View style={styles.container}>
        <CompletedTaskList />
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