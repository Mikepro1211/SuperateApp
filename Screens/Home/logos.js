import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Lightbox from 'react-native-lightbox';


export default function Logos () {
 

  return (
    <View style={styles.container}>
     <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});


