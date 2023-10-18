import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


export default function App() {
  return (
  
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]}>
          <LottieView
          source={require('../../assets/animations/lottie2.json')} 
          autoPlay
          loop
          marginTop={'-40%'}
        />
          <Text style={styles.buttonText1}>+1.5k Graduados</Text>
        </TouchableOpacity>
       
       
        <View style={styles.verticalButtons}>
          <TouchableOpacity style={[styles.button2]}>
            <Text style={styles.buttonText}>Liderazgo</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.button3]}>
            <Text style={styles.buttonText}>Excelencia</Text>
          </TouchableOpacity>
        </View>
      </View>
   
  );
}

const styles = StyleSheet.create({
  
 
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  verticalButtons: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
    width: '40%',
    justifyContent: 'space-between',
  },

  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height:'100%',
    width: '40%',
    backgroundColor: '#00B6DE',
  },
  button2:{
    backgroundColor: '#045796',
    width: '80%', 
    height: '49%', 
    borderRadius: 10,  
    paddingVertical: 8, 
    textAlign: 'center', 
    paddingVertical: 15
  },
  button3:{
    backgroundColor: '#8DC63F',
    width: '80%', 
    height: '49%', 
    borderRadius: 10,  
    paddingVertical: 8, 
    textAlign: 'center', 
    paddingVertical: 15
    
  },
  buttonText1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginTop: '90%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    
    marginTop: '15%',
  
  },


});
