import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/Home";
import CompletedTask from "../screens/CompletedTask";

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CompletedTask' component={CompletedTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}