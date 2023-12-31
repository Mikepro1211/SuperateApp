import { StyleSheet,  View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function Drawerview(props){
    return(
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>

                <Image source={require('../assets/eclipseDrawerItem.png')} style={styles.circleImage}/>

            </View>

            <DrawerItemList {...props}/>


        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    circleImage:{
        width: 150,
        height: 150,
        marginLeft: 50,
        marginTop:25,
        marginBottom: 20,

    },

    container: {
        justifyContent: 'center',
        height: "auto",
        marginTop:10,


    },
    drawerHead:{
        backgroundColor:'#091353',

        height:'100%',
    },
})