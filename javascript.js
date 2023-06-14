const gameBoard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;

  for (i = 0; i < rows; i++){
    board[i] = [];
    for (c = 0; c < columns; c++){
      board[i].push(Cell());
    }
  }

  function Cell(){
    let value = 0;
    const addMarker = (player) => {
      value = player
    }
    const getValue = () => value;
    return{addMarker, getValue}
  }

  const getBoard = () => board;

  const printBoard = () =>{
    const boardWithCellValues = board.map(row => row.map(cell => cell.getValue()))
    console.log(boardWithCellValues)
  }

  const selectCell = (row,column,player) => {
    if (board[row][column].getValue != 0) console.log('unavailable') 
    board[row][column].addMarker(player.getMarker)
    console.log(board[row][column].getValue())
    return
  }
  

  return{getBoard, printBoard, selectCell}

})();

const Player = (name,mark) =>{
 const getName = () => name
 const getMarker = mark


 return{getName, getMarker}

};


const gameController = (() =>{
  const board = gameBoard
  const playerOne = Player("Jim","X")
  const playerTwo = Player("Joe","O")
  const players = [
    {name: playerOne.getName(),
     marker: playerOne.getMarker
    },
    {name: playerTwo.getName(),
    marker: playerTwo.getMarker
    },
  ]

  let currentTurn = players[0]

  const switchTurns = () => {
    currentTurn = currentTurn === players[0] ? players[1] : players[0]
  }
  const printNewRound = () => {
    board.printBoard()
    console.log(`${currentTurn.name}'s turn`)
  }

  const playRound = (column,row) =>{
    console.log(`Selected ${currentTurn.name}'s mark selected ${row} and ${column}`)
    board.selectCell(row,column,currentTurn)
    switchTurns()
    printNewRound()
  }
  printNewRound()
  return {board, currentTurn,playRound}
})();

const jim = Player("Jim","x")







