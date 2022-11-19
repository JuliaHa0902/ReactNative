// mock data for testing the app
export const TaskData = [
    {
        title: "This is a demo task",
        description: "And a demo description",
        isDone: false,
    },
    {
        title: "Another one",
        description: "And another demo description",
        isDone: true,
    }
];

// constants that exist within the app
export const AppData = {
    modal: {
        edit: {

        },
        add: {
            title: 'Title',
            titlePlaceholder: 'Enter task title',
            descTitle: 'Description',
            descPlaceholder: 'Enter task description',
            button: {
                cancel: 'Cancel',
                save: 'Save'
            },
            alert: {
                noTaskTitle: 'You must enter a task name'
            }
        }
    },
    taskButtons: {
        delete: 'Delete',
        edit: 'Edit'
    }
}

// by default you can get all of the data here
const Data = {
    appData: AppData,
    taskData: TaskData
}
export default Data