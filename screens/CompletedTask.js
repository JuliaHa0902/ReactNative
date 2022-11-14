import React from "react";
import {useReducer} from 'react';
import { LogBox } from 'react-native';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Home from "./Home";

export default function CompletedTask({navigation}) {  
  
    return (
      <View style={styles.container}>
        <Text>Completed Task screen!</Text>
       
        {/* <Button
        title="Home"
        onPress={() => navigation.navigate(Home)} /> */}
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