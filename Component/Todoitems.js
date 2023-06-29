import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Todoitems({item, pressHandler}) {
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>
                {/* <AntDesign name="check" style={styles.icon} size={24} color="black" />   */}
                <Text style={styles.text}>{item.text}</Text>
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    icon:{
        alignContent: 'center',
        justifyContent: 'center',
        margin:20,
        padding:20,
    },
    text:{
        alignContent: 'center',
        justifyContent: 'center',
        margin:20,
        padding:20,
    }

})