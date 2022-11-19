// mock data for testing the app

// load in some sample task items here..
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

// constants that exist within the app can be changed here..
export const AppData = {
    modal: {
        add: {
            title: 'Title',
            descTitle: 'Description',
            button: {
                cancel: 'Cancel',
                save: 'Save'
            }
        }
    },

    taskButtons: {
        delete: 'Delete',
        edit: 'Edit'
    },

    alert: {
        task: {
            label: 'Task:',
            radioButton: {
                added: 'was added to the completed list',
                removed: 'was removed from the completed list'
            },
            deleteButton: {
                dialog: 'Are you sure you want to delete this task?',
                cancel: {
                    yes: 'Yes',
                    no: 'No'
                }
            },
            noTitle: 'You must enter a task title'
        }
    }
}

// by default you can get all of the data here if you don't want to
// keep grabbing it individually
const Data = {
    appData: AppData,
    taskData: TaskData
}
export default Data