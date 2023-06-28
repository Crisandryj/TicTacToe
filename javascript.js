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
    boardWithValues = board.map(row => row.map(cell => cell.getValue()))
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
  const board = gameBoard;
  const playerOne = player("Jim","O")
  const playerTwo = player("James","X")

  let currentPlayerTurn = playerOne

  const getActivePlayer = () => currentPlayerTurn

  const switchTurns = () => {
    currentPlayerTurn = (currentPlayerTurn = playerOne? playerTwo : playerOne)
  }

  const printNewRound = () =>{
    console.log(`${currentPlayerTurn.getPlayerName()} make your move`)
    board.printBoard()
  }

  const playRound = (row,column) => {
    console.log(`Selected ${currentPlayerTurn.getPlayerName()}'s mark selected ${row} and ${column}`)
    board.selectCell(row,column,currentPlayerTurn)

    switchTurns()
    printNewRound()
  }

  return {getBoard: board.getBoard,
          playRound,
          getActivePlayer}
};


function ScreenController () {
  const game = GameController();
  const playerTurnDiv = document.querySelector('.turn')
  const playerBoardDiv = document.querySelector('.board')

  const updateScreen = () =>{
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer()

    
  }


};