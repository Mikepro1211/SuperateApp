import {View, Text, StyleSheet, Dimensions,ScrollView,SafeAreaView} from 'react-native'
import AutoplayCarousel from './Carousel';
import Datos from './Datos';
import Video from './Video';

const screenWidth = Dimensions.get("window").width;
export default function Home() {


    
    return(
        <SafeAreaView style={styles.view}>
        <ScrollView style={styles.scrollView}>
            <Text style={{marginTop:20, fontSize: 20, marginLeft:20, fontFamily: 'Roboto',}}>¡Supérate!</Text>
           
            <View style={{borderRadius:20}}>
                <AutoplayCarousel style={styles.carusel} />
            </View>
            <Text style={styles.text}>Áreas Curriculares</Text>
            
            <View style={{borderRadius:20, height: screenWidth/1.8,margin:20,width: screenWidth  }}>
                <Datos/>
            </View>

            <Text style={styles.text}>Videos</Text>
            <View>
            <AutoplayCarousel style={styles.carusel} />
            </View>

            <Text style={styles.text}>Casos de Éxito</Text>
            <View>
            <AutoplayCarousel style={styles.carusel} />
            </View>
         

       </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:3,
        backgroundColor: 'white',
        
    },
    carusel: {
        borderRadius: 20,
       width: screenWidth*1
    },

    text: {
        fontSize: 20,
        marginLeft:20,
        marginTop:4,
        fontFamily: 'Roboto',
    }


})