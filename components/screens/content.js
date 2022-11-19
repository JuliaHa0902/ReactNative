import ToDoTaskScreen from './ToDoTaskScreen'
import CompletedTaskScreen from './CompletedTaskScreen'

const Content = props => {
    const {
        active,
        TaskData,
        show,
        mode,
        setTaskData,
        setShow,
        foregroundColor,
        backgroundColor
    } = props

    if ( active === 'TODO' ) {
        return (
            <ToDoTaskScreen
                mode={ mode }
                TaskData={ TaskData } 
                setTaskData={ setTaskData } 
                foregroundColor={ foregroundColor }
                backgroundColor={ backgroundColor }
            />
        )
    }
    if ( active === 'COMPLETE' ) {
        return (
            <CompletedTaskScreen 
                TaskData={ TaskData } 
                setTaskData={ setTaskData }
                show={ show }
                mode={ mode }
                setShow={ setShow }
                foregroundColor={ foregroundColor }
                backgroundColor={ backgroundColor }
            />
        )
    }
}

export default Content