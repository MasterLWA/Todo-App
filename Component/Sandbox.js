import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 60,
        backgroundColor: 'pink',
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom: 0,
        // flex: 1,
    },
    boxOne:{
        flex: 4,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo:{
        flex: 3,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree:{
        flex: 2,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour:{
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
    },
})