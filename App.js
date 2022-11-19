import React, { useState } from 'react'
import { StatusBar } from "react-native"

// components
import OpenDrawer from './components/drawer/open'
import ClosedDrawer from './components/drawer/closed'

// data load from file
import { TaskData } from "./components/data/data";

const animationSpeed = 500 // ms

const App = () => {
    const [ data, setData ] = useState( TaskData )
    const [ show, setShow ] = useState( false )
    const [ active, setActive ] = useState( 'TODO' )

    // day/night toggle
    const [ mode, setMode ] = React.useState( false );
    const [ backgroundColor, setBackgroundColor ] = useState( '#fff' );
    const [ foregroundColor, setForegroundColor ] = useState( '#333' );

    StatusBar.setBarStyle( 'light-content' )

    // drawer open
    if ( show ) {
        return (
            <OpenDrawer
                TaskData={ data }
                show={ show }
                mode={ mode }
                active={ active }
                setMode={ setMode }
                setTaskData={ setData }
                setShow={ setShow }
                setActive={ setActive }
                setForegroundColor={ setForegroundColor }
                setBackgroundColor={ setBackgroundColor }
                animationSpeed={ animationSpeed }
                foregroundColor={ foregroundColor }
                backgroundColor={ backgroundColor }
            />
        )
    }
    // drawer closed (viewing tasks)
    else {
        return (
            <ClosedDrawer
                TaskData={ data }
                show={ show }
                mode={ mode }
                active={ active }
                setMode={ setMode }
                setTaskData={ setData }
                setShow={ setShow }
                setActive={ setActive }
                setForegroundColor={ setForegroundColor }
                setBackgroundColor={ setBackgroundColor }
                animationSpeed={ animationSpeed }
                foregroundColor={ foregroundColor }
                backgroundColor={ backgroundColor }
            />
        )
    }
}

export default App