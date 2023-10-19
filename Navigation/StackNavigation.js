import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigation from "./drawernavigation";
import Datos from "./datos";


//importaciones de screens llamadas por Stack
import informacionCentro from "../Screens/InformacionCentro";
const Stack = createStackNavigator()

export default function StackNavigation(){
    return(
        <Stack.Navigator >
        <Stack.Screen name={"index"} component={DrawerNavigation} options={{headerShown:false}}/>
        <Stack.Screen name={"informacionCentro"} component={informacionCentro} options={{title:"",
            }}/>
        </Stack.Navigator>
    )
}