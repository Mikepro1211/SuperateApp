import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Alert, Button, Linking, } from 'react-native'
import React, {useCallback} from 'react'

const supportedURL = 'https://superate.org.sv/contacto/';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};
  

export default function NuestroPrograma() {
  return (
    <SafeAreaView>
        <ScrollView>
    <Text style={styles.heading}>Nuestro Programa</Text>
    
    <Text style={styles.paragraph}>
        Brinda educación de alta calidad en inglés, informática y valores a jóvenes de 
        alto rendimiento académico durante tres años. Los jóvenes reciben tres horas diarias 
        de clase, de forma complementaria y paralela a la educación del sistema público.
    </Text>

    <></>
    <Text style={styles.paragraph}>
        Al finalizar el Programa, obtienen certificaciones internacionales que garantizan un 
        dominio avanzado del idioma inglés y el manejo eficiente de las herramientas de 
        Microsoft Office y programación.
    </Text>
    <></>
    <Text style={styles.paragraph}>
        Los jóvenes también cuentan con una sólida base de valores y reflejan el compromiso 
        de seguir contribuyendo al desarrollo socioeconómico del país.
    </Text>

    <Text style={styles.heading}>Áreas Curriculares</Text>
    <View style={styles.imgView}>
        <Image style={styles.image} source={{uri:'https://superate.org.sv/wp-content/uploads/2018/12/3_areas_curric.jpg'}}/>
    </View>


    <Text style={styles.heading}>Requisitos de ingreso:</Text>
    <Text style={styles.requirements}>
              1. 13 o 14 años cumplidos
        {'\n'}2. Cursar 8 grado del sistema público.
        {'\n'}3. Alto rendimiento académico (mínimo de 8)
        {'\n'}4. Recomendado por el director de su Centro Escolar.
        {'\n'}5. Demostrar el deseo y potencial de superación.
      </Text>

      <Text style={styles.link}>Para más información sobre requisitos haz click<OpenURLButton style={styles.link} url={supportedURL}>AQUÍ</OpenURLButton></Text>

      <View style={styles.imgView}>
      <Image style={styles.image2} source={{uri:'https://superate.org.sv/wp-content/uploads/2018/10/Webp.net-compress-image.jpg'}}/>
      </View>
      </ScrollView>
</SafeAreaView>

  )
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 200,
        borderRadius: 0,
      },
      image2:{
        width: 350,
        height: 200,
        marginTop:10,
        marginLeft:20,
        marginRight:20
      },
      imgView:{
        alignItems:'center',
        marginTop:15
      },
      container: {
        flex: 1,
        padding: 16,
      },
      link:{
        fontSize:18,
        marginLeft:10,
        marginTop:20
      },
      heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft:10,
        color:'darkturquoise',
        fontFamily:'Verdana'
      },
      paragraph: {
        marginTop: 10,
        marginLeft:15,
        marginRight:15,
        marginEnd:10,
        fontFamily:'Verdana'
      },
      requirements: {
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft:20,
        marginRight:15,
        marginEnd:10,
        fontSize:13,
        fontFamily:'Verdana'
      },
})