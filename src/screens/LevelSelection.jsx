import React from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native'

export default props => {
    return(
        <Modal onRequestClose={props.onCancel}
               visible={props.isVisible}
               animationType={'fade'}
               transparent={true}>
            <SafeAreaView style={styles.frame}>
                <SafeAreaView>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]}
                                      onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgNormal]}
                                      onPress={() => props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]}
                                      onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    title: {
        color: '#eee',
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
        alignItems: 'center'
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: "#49b65d",
    },
    bgNormal: {
        backgroundColor: "#2765f7",
    },
    bgHard: {
        backgroundColor: "#f26337",
    },
})