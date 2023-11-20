import { View, Text } from 'react-native'
import React from 'react'
import { DrawerItem } from '@react-navigation/drawer';
import NuestraHistoria from '../Screens/Historia/NuestraHistoria';
import NuestraFilosofia from '../Screens/Filosofia/NuestraFilosofia';
import EfectoMultiplicador from '../Screens/EfectoMultiplicador';
import NuestroEquipo from '../Screens/NuestroEquipo';


export default function drawerMenu() {
  return (
    <DrawerItem label="¿Quienes somos?" icon="reader-outline">
        <DrawerItem label="Nuestra historia" component={NuestraHistoria} />
        <DrawerItem label="Nuestra filosofia" component={NuestraFilosofia} />
        <DrawerItem label="Efecto multiplicador" component={EfectoMultiplicador} />
        <DrawerItem label="Nuestro equipo" component={NuestroEquipo} />
      </DrawerItem>
  )
}
