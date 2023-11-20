import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigation from "./drawernavigation";
import OnboardingScreen from "../Screens/OnboardingScreen";


import InformacionCentro from "../Screens/InformacionCentro";

//importaciones de screens llamadas por Stack

import { useState } from "react";

const Stack = createStackNavigator()


export default function StackNavigation(){
    
    

    
        return(
            <Stack.Navigator >
                 <Stack.Screen name={"index"} component={OnboardingScreen} options={{headerShown:false}}/>
            <Stack.Screen name={"Drawer"} component={DrawerNavigation} options={{headerShown:false}}/>
            <Stack.Screen name={"InformacionCentro"} component={InformacionCentro} options={{title:""}}/>

            </Stack.Navigator>
            ) 

    
    
    
    
}