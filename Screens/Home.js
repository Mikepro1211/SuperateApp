import {View, Text, StyleSheet} from 'react-native'


export default function Home() {
    return(
        <View style={styles.view}>
            <Text style={styles.text}> I am at Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },

    text: {
        fontSize: 20,
    }


})