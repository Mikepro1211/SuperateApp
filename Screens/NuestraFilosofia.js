import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';

const NuestraFilosofia = () => {
  return (
    <DrawerItem
      label="Nuestro Programa"
      onPress={() => navigation.navigate('NuestraFilosofia')}
    />
  );
};

export default NuestraFilosofia;