import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigation from "./drawernavigation";
import { NavigationContainer } from "@react-navigation/native";
import {View, Text} from "react-native"


//importaciones de screens llamadas por Stack
import Poma from "../Screens/Poma";
import { Button } from "react-native";
const Stack = createStackNavigator()

export default function StackNavigation(){
    return(
        <Stack.Navigator >
        <Stack.Screen name={"index"} component={DrawerNavigation} options={{headerShown:false}}/>
            <Stack.Screen name={"Poma"} component={Poma}/>
        </Stack.Navigator>
    )
}