import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigation from "./drawernavigation";


//importaciones de screens llamadas por Stack
import Poma from "../Screens/Poma";
const Stack = createStackNavigator()

export default function StackNavigation(){
    return(
        <Stack.Navigator >
        <Stack.Screen name={"index"} component={DrawerNavigation} options={{headerShown:false}}/>
            <Stack.Screen name={"Poma"} component={Poma}/>
        </Stack.Navigator>
    )
}