import React, {Component} from 'react'
import { Text, SafeAreaView, StyleSheet, Alert } from "react-native"

import params from '../params'
import LevelSelection from '../screens/LevelSelection'
import Header from '../components/Header'
import MineField from '../components/MineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from '../script'

export default class index extends Component {

  constructor(props) {
     super(props)
     this.state = this.createState()
  }

  minesAmount = () => {
     const cols = params.getColumnsAmount()
     const rows = params.getRowsAmount()
     return Math.ceil(rows * cols * params.difficultyLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost) {
      showMines(board)
      Alert.alert('LOSER!')
    }

    if(won) {
      Alert.alert('WINNER!')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    this.setState({board})

    // const won = wonGame(board)
    // if (won) {
    //   Alert.alert('WINNER!')
    // }
    // this.setState({board, won})
  }

  onLevelSelected = level => {
    params.difficultyLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
                        onLevelSelected={this.onLevelSelected}
                        onCancel={() => this.setState({showLevelSelection: false})} />
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})} />
        <SafeAreaView style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}/>
        </SafeAreaView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
  },
  board: {
    alignItems: "center",
    backgroundColor: '#aaa'
  },
})