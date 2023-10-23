import {View, Text, StyleSheet} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react'
import NuestraHistoria from "../Screens/NuestraHistoria";
import NuestraFilosofia from "../Screens/NuestraFilosofia";
import EfectoMultiplicador from "../Screens/EfectoMultiplicador";
import NuestroEquipo from "../Screens/NuestroEquipo";



  function Screen1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <NuestraHistoria/>
      </View>
    );
  }

  function Screen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <NuestraFilosofia/>
      </View>
    );
  }
  

  function Screen3() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <EfectoMultiplicador/>
      </View>
    );
  }

  function Screen4() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <NuestroEquipo/>
      </View>
    );
  }
  
  const Tab = createMaterialTopTabNavigator();
  
  export default function TabBarNavigator() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Nuestra Historia" component={Screen1} />
          <Tab.Screen name="Nuestra Filosofia" component={Screen2} />
          <Tab.Screen name="Efecto  Multiplicador" component={Screen3} />
          <Tab.Screen name="Nuestro Equipo" component={Screen4} />
        </Tab.Navigator>
    );
  }
