import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import params from '../params'

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.coreMine} />
            <SafeAreaView style={styles.line} />
            <SafeAreaView style={[styles.line, {transform: [{rotate: '45deg'}]}]} />
            <SafeAreaView style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
            <SafeAreaView style={[styles.line, {transform: [{rotate: '135deg'}]}]} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'rgba(0,0,0,1)',
    },
})