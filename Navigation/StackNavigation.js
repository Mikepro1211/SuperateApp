import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./drawernavigation";
import InformacionCentro from "../Screens/InformacionCentro";
import OnboardingScreen from "../Screens/OnboardingScreen"; 

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Onboarding"} component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name={"Drawer"} component={DrawerNavigation} options={{ headerShown: false }} />
      <Stack.Screen name={"InformacionCentro"} component={InformacionCentro} options={{ title: "" }} />
    </Stack.Navigator>
  );
}
