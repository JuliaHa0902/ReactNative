import React, { useRef } from 'react'
import { Animated, StatusBar, View, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

// components
import DrawerFlyout from './flyout'
import Content from '../screens/content'

// styles
import { DrawerStyles } from './styles'

const ClosedDrawer = props => {
    const slideAnim = useRef( new Animated.Value( 0 ) ).current;

    const {
        TaskData,
        setTaskData,
        setMode,
        mode,
        active,
        setActive,
        show,
        setShow,
        animationSpeed,
        foregroundColor,
        setForegroundColor,
        backgroundColor,
        setBackgroundColor
    } = props

    Animated.timing( slideAnim, {
        toValue: -200,
        duration: animationSpeed,
        useNativeDriver: false
    } ).start()

    return (
        <View style={ { ...DrawerStyles.background, backgroundColor: backgroundColor } }>
            <StatusBar
                backgroundColor={ foregroundColor }
                barStyle={ mode ? 'dark-content' : 'light-content' }
            />

            <Content
                active={ active }
                TaskData={ TaskData }
                show={ show }
                mode={ mode }
                setShow={ setShow }
                setTaskData={ setTaskData }
                foregroundColor={ foregroundColor }
                backgroundColor={ backgroundColor }
            />

            <TouchableOpacity
                style={ DrawerStyles.menu }
                activeOpacity={ 0.7 }
                onPress={ () => setShow( !show ) }
            >
                <Ionicons name="menu" size={ 36 } style={{ color: foregroundColor }} />
            </TouchableOpacity>

            <Animated.View style={ {
                ...DrawerStyles.drawer, left: slideAnim,
                backgroundColor: backgroundColor
            } }>
                <DrawerFlyout
                    show={ show }
                    mode={ mode }
                    setMode={ setMode }
                    active={ active }
                    slideAnim={ slideAnim }
                    setShow={ setShow }
                    setActive={ setActive }
                    foregroundColor={ foregroundColor }
                    setForegroundColor={ setForegroundColor }
                    backgroundColor={ backgroundColor }
                    setBackgroundColor={ setBackgroundColor }
                />
            </Animated.View>
        </View >
    )
}

export default ClosedDrawer