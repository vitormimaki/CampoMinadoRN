import React from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'

import Flag from './Flag'

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                                  style={styles.flagButton}>
                    <Flag bigger/>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </SafeAreaView>
            <TouchableOpacity style={styles.button}
                              onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
        marginRight: 50,
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#ddd',
    },
})