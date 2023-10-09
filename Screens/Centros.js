import {Text,View , TouchableOpacity, StyleSheet} from "react-native";

export default function Centros({navigation}){
    return(
        <View>
            <Text>Centros</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Poma")}>
                <Text style={styles.text} >Superate Fundacion Poma</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    button:{
        backgroundColor: '#091353',
        padding: 10,
    },
    text:{
        color: '#ffffff'
    }

})
