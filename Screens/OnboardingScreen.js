import { View,ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import { setItem } from '../utils/asyncStorage';


const { width, height } = Dimensions.get('window');

//COLORES
var Celeste = '#00B6DE';
var Verde =   '#8DC63F';
var Azul = '#045796';
var GrisC = '#BCBEC0';
var GrisO = '#808285';


export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    
    <View style={styles.view}>
      
      
      <Onboarding
       
        onDone={() => {navigation.navigate('Drawer'), setItem('onboarded','1')}}
        onSkip={() => navigation.navigate('Drawer')}
        containerStyles={{ paddingHorizontal: 0 }}
        
        
    
        pages={[
       
          {
            backgroundColor: Azul, 
            image: <Image source={require('../assets/images/digital2.jpg')}  style={styles.imagenes}/>,
            title: 'Raising the bar',
            subtitle: 'En octubre de 2022 ¡Supérate! y USAID firman el nuevo convenio titulado “Digital Talent"',
          },
          {
            backgroundColor: Celeste, 
            image: (
              <Image source={require('../assets/images/sup6.jpg')} style={styles.imagenes}/>
            ),
            title: 'Walk the extra mile',
            subtitle: '"La educación es el arma más poderosa que puedes usar para cambiar el mundo"',
          },
            {
            backgroundColor: '#8DC63F', 
            image: (
              <Image
                source={require('../assets/images/4.jpg')}
                style={styles.imagenes}
              />
            ),
            title: 'Giving back',
            subtitle: 'El Programa ¡Supérate! posee un enfoque en la calidad educativa, entendida como el resultado de la articulación y mejora constante de sus elementos',
          },
        ]}
        type={'fullscreen'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: -40,
    
  },
  imagenes: {
    width: width * 0.9, 
    height: height * 0.40,
    borderRadius: 20,
    paddingTop: 100,
  },
});
