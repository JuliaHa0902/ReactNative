import React, { useRef } from 'react'
import {
    StyleSheet,
    Animated,
    StatusBar,
    View,
    TouchableOpacity
} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

// components
import DrawerFlyout from './flyout'
import Content from '../screens/content'

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
        <View style={ { ...styles.background, backgroundColor: backgroundColor } }>
            <StatusBar
                backgroundColor={ foregroundColor }
                barStyle={ mode ? 'dark-content' : 'light-content' }
            />

            <Content
                active={ active }
                TaskData={ TaskData }
                show={ show }
                setShow={ setShow }
                setTaskData={ setTaskData }
                foregroundColor={ foregroundColor }
                backgroundColor={ backgroundColor }
            />

            <View style={ { ...styles.menu, color: foregroundColor } }>
                <Ionicons name="menu" size={ 36 } />
            </View>

            {/* overlay */ }
            <TouchableOpacity
                style={ styles.overlay }
                activeOpacity={ 0.5 }
                onPress={ () => setShow( !show ) }
            />

            <Animated.View style={ {
                ...styles.drawer, left: slideAnim,
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

const styles = StyleSheet.create( {
    background: {
        flex: 1
    },
    menu: {
        position: 'absolute',
        alignSelf: 'flex-start',
        zIndex: 10,
        elevation: 10
    },
    drawer: {
        position: 'absolute',
        height: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 20,
        zIndex: 20,
        width: 200,
    },
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#333',
        opacity: 0.5,
        right: 0,
        zIndex: 19,
        elevation: 19
    }
} )

export default OpenDrawer