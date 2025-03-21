const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_,rows) => {
        return Array(columns).fill(0).map((_,columns) => {
            return {
                rows, //rows: rows,
                columns, //columns: columns,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    
    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if(!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)

    return board
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
      columns.forEach(c => {
            const different = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if(different && validColumn && validRow) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board, row, column) => {
    const field = board[row][column]
    if(!field.opened) {
        if(!field.flagged) {
            field.opened = true
            if(field.mined) {
                field.exploded = true
            } else if (safeNeighborhood(board, row, column)) {
                getNeighbors(board, row, column)
                    .forEach(n => openField(board, n.rows, n.columns))
            } else {
                const neighbor = getNeighbors(board, row, column)
                field.nearMines = neighbor.filter(n => n.mined).length
            }
        }
    }
}

const fields = board => [].concat(...board)
const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0
const pending = field => (!field.mined && !field.opened) //|| (field.mined && !field.flagged) descometar se quiser obrigar colocar flag
const wonGame = board => fields(board).filter(pending).length === 0
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)

const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
}