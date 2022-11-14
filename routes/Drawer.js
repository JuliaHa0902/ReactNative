import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import Home from '../screens/Home';
import CompletedTask from '../screens/CompletedTask';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView,DrawerItemList, } from '@react-navigation/drawer';
import {
    View,
    Text,
} from 'react-native';

const stylesFont = {fontSize: 20,padding: 10,}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props){
    return(
        <DrawerContentScrollView{...props}>
        <Text style={stylesFont}>Menu</Text>
        <DrawerItemList{...props}/>
        </DrawerContentScrollView>
    );
}

export default function MyDrawer(){
    return(
        <NavigationContainer>
        <Drawer.Navigator headertitle="Menu" useLegacyImplementation={true} drawerContent={(props) => <CustomDrawerContent {...props}/>} initialRouteName="Home" >
            <Drawer.Screen name='Today task' component={Home}/>
            <Drawer.Screen name='Completed task' component={CompletedTask}/>
        </Drawer.Navigator>
        </NavigationContainer>
    );
}
