import React, {useState, useEffect} from 'react';
import Home from './screens/Home';
import Navigator from './routes/HomeStack'
import { database } from './utilities/DatabaseHelper';
import { TasksContextProvider } from './context/TaskContext';


export default function App() {

  useEffect(() => {
    async function loadDataAsync() {
      try {
        await database.createTable()
        // await database.insertTask ("Hello", "Please show", ()=>{})
      } catch (e) {
        console.warn(e);
      }
    }

    loadDataAsync();
  }, []);

  return (
    <TasksContextProvider>
      <Navigator />
    </TasksContextProvider>
  );
}

