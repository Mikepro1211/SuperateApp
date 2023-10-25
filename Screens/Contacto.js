import {Text ,View ,StyleSheet, ScrollView , KeyboardAvoidingView} from "react-native";
import {TextField} from "react-native-ui-lib";
import {TextInput} from "react-native-paper";
import { Platform } from "react-native";


export default  function Contacto(){
    return(
        <ScrollView style={styles.container}>
        
            <View style={styles.ContactConainer}>
                <Text style={styles.contactText}>Contacta las oficinas institucionales</Text>
             </View>
            <KeyboardAvoidingView style={{padding:16 , backgroundColor:'#ff3'}}behavior={Platform.OS=='ios'?'padding':'height'}>
              
                <TextField style={styles.input}
                    placeholder="Nombre"
                    floatingPlaceholder
                    floatOnFocus
                    containerStyle={{marginBottom: 20}}/>
                   

                
            </KeyboardAvoidingView>
            
              
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    input:{
        width:"100%",
        padding:10,
        color:'#000',
    },
    container:{
        flex:1,
        padding:16,
        backgroundColor:"#ffff"
    },
    ContactConainer:{
        flex:1,
        flexDirection:"column",
        
       
        backgroundColor:"#ffff",
        width:"100%",
        padding:16
    },
    
    
})