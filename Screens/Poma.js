import { View, Text ,StyleSheet} from 'react-native';

export default function Poma({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Poma</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: 'red',
    }
})

