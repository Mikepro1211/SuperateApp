import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Aliados = () => {

  return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pantalla Aliados</Text>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    titulo: {
        color: "#00B6D8",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default Aliados;
