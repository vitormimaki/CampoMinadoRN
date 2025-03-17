import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import params from '../params'

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
            <SafeAreaView style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
            <SafeAreaView style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
            <SafeAreaView style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 2,
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 7,
        backgroundColor: '#F22',
        marginLeft: 3,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    },
})