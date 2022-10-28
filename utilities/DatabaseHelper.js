import React from 'react'

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const getTasks = (setUserFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'select * from tasks',
        [],
        (_, { rows: { _array } }) => {
          setUserFunc(_array)
        }
      );
    },
    (t, error) => { console.log("db error load tasks"); console.log(error) },
    (_t, _success) => { console.log("loaded tasks")}
  );
}

const insertTask = (title, description, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'insert into tasks (title, description, isDone) values (?, ?, ?)', [title, description, 0] );
    },
    (t, error) => { console.log("db error insertUser"); console.log(error);},
    (t, success) => { console.log ("insert " + title), successFunc() }
  )
}


const createTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, isDone INTEGER);'
        );
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { console.log("create table success"); resolve(success)}
    )
  })
}


export const database = {
  getTasks,
  createTable,
  insertTask,
}