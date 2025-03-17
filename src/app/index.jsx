import React from 'react'
import { Text, SafeAreaView, StyleSheet } from "react-native"
import params from '../params'
import Field from '../components/Field'

//import Flag from '../components/Flag'

export default props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Preparando o Campo Minado!</Text>
      <Text>Tamanho da Grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <SafeAreaView style={[{flexDirection: 'row', padding: 20, flexWrap: 'wrap'}]}>
        <Field />
        <Field opened/>
        <Field opened nearMines = {1}/>
        <Field opened nearMines = {2}/>
        <Field opened nearMines = {3}/>
        <Field opened nearMines = {6}/>
        <Field mined/>
        <Field opened mined/>
        <Field opened mined exploded/>
        <Field flagged/>
        <Field flagged opened/>
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
  },
})