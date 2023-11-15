import {View, Text, StyleSheet, ScrollView} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react'
import NuestraHistoria from "../Screens/NuestraHistoria";
import NuestraFilosofia from "../Screens/NuestraFilosofia";
import EfectoMultiplicador from "../Screens/EfectoMultiplicador";
import NuestroEquipo from "../Screens/NuestroEquipo";



  function Screen1() {
    return (
      <View>
        <NuestraHistoria/>
      </View>
    );
  }

  function Screen2() {
    return (
      <View>
        <NuestraFilosofia/>
      </View>
    );
  }

  function Screen3() {
    return (
      <View>
        <EfectoMultiplicador/>
      </View>
    );
  }
  
  function Screen4() {
    return (
      <View >
        <NuestroEquipo/>
      </View>
    );
  }
  
  const Tab = createMaterialTopTabNavigator();
  
  export default function TabBarNavigator() {
    return (
        <Tab.Navigator 
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: "capitalize", 
            fontWeight:"bold",
            width:75,
            height:30,
            padding:0,
          }, 
          tabBarIndicatorStyle:{
            height: 7,
            borderRadius:5,
            backgroundColor:"#00B6D8",
          },
          }}>
          <Tab.Screen name="Nuestra Historia" component={Screen1} />
          <Tab.Screen name="Nuestra Filosofia" component={Screen2} />
          <Tab.Screen name="Efecto Multiplicador" component={Screen3} />
          <Tab.Screen name="Nuestro Equipo" component={Screen4} />
        </Tab.Navigator>
    );
  };

