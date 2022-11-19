import React, { useRef } from 'react'
import { Animated, StatusBar, View, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

// components
import DrawerFlyout from './flyout'
import Content from '../screens/content'

// styles
import { DrawerStyles } from './styles'

const OpenDrawer = props => {
    const slideAnim = useRef( new Animated.Value( -200 ) ).current;

    const {
        TaskData,
        setTaskData,
        mode,
        setMode,
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
        toValue: 0,
        duration: animationSpeed,
        useNativeDriver: false
    } ).start();

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

            <View style={ { ...DrawerStyles.menu, color: foregroundColor } }>
                <Ionicons name="menu" size={ 36 } />
            </View>

            {/* overlay */ }
            <TouchableOpacity
                style={ DrawerStyles.overlay }
                activeOpacity={ 0.5 }
                onPress={ () => setShow( !show ) }
            />

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

export default OpenDrawer