const gameBoard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;
 
  for (i = 0; i < rows; i++) {
    board.push([])
    for (c = 0; c < columns; c++){
      board[i][c] = Cell()
    }
  } 

  const getBoard = () => board

  const printBoard = () => {
    boardWithValues = board.map(row => row.map(cell => cell.value = 0))
    console.log(boardWithValues)
  }

  function Cell(){
    let value = 0
    const addMarker = (player) => {value = player}

    const getMark = () => mark
    const getValue = () => value

    return {addMarker, getValue, getMark}
  }

  const selectCell = (row,column,player) =>  {
    if (board[row][column].getValue() != 0) console.log("unavailable")
    board[row][column].addMarker(player.getMarker())
    console.log(board[row][column].getValue())
  }
    
return {getBoard, printBoard, selectCell}

})();

const player = (name, mark) =>{
  const playerName = name;
  const marker = mark;

  const getPlayerName = () => name;
  const getMarker = () => mark;

  return {getPlayerName, getMarker}

};

function GameController () {
  const board = gameBoard.getBoard();
  const playerOne = player("Jim","X")
  const playerTwo = player("James","O")

  const currentPlayerTurn = playerOne

  const switchTurns = () => {
    currentPlayerTurn = (currentPlayerTurn = playerOne? playerTwo : playerOne)
  }

  const playRound = () => {
    console.log(`${currentPlayerTurn.getPlayerName()} make your move`)

  }

  return {board,playRound,currentPlayerTurn}
};

const james = player('jim','X')


console.log(GameController.board.printBoard) 

