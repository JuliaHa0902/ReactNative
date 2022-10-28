import React, { useEffect, createContext, useState } from 'react';
import { database } from '../utilities/DatabaseHelper';


export const TasksContext = createContext({});

export const TasksContextProvider = props => {
  // Initial values are obtained from the props
  const {
    tasks: initialTasks,
    children
  } = props;

  // Use State to store the values
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    refreshTasks()
  }, [] )

  const addNewTask = (title, description) => {
    return database.insertTask(title, description, refreshTasks)
  };

  const refreshTasks = () =>  {
    return database.getTasks(setTasks)
  }

  // Make the context object:
  const tasksContext = {
    tasks,
    addNewTask
  };

  // pass the value in provider and return
  return <TasksContext.Provider value={tasksContext}>{children}</TasksContext.Provider>;
};