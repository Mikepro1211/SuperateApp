import { View, Text ,StyleSheet, Image, ScrollView} from 'react-native';
import {Carousel} from "react-native-ui-lib";

export default function informacionCentro({navigation , route}) {
    const {centro} = route.params
    return(
        <View style={styles.container}>

            <Carousel onChangePage={()=> console.log("change")} showCounter={true} autoplay={true}  loop={true} >
                {centro.imagenes.map((imagen, index) => (
                    <Image key={index} style={{ width: 400, height: 250 }} source={{ uri: imagen }}  />))}
            </Carousel>
            <View style={styles.containerStudent}>
            <Text>{centro.estudiantes}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container :{
        flex: 1,

    },
    Text:{
      fontSize:100,
    },
    imagen:{
        width:'100%',
        height: 200,
    }
})

