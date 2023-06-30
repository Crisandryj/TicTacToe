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
    const addMarker = (playerMark) => {value = playerMark}

    const getMark = () => mark
    const getValue = () => value

    return {addMarker, getValue, getMark}
  }

  const selectCell = (row,column,player) =>  {
    if (board[row][column].getValue() != 0) return
    board[row][column].addMarker(player.getMarker())
    console.log(board[row][column].getValue())
  }
    
return {getBoard, printBoard, selectCell}

})();

const player = (name, mark) =>{
  const playerName = name;
  const marker = mark;

  const getPlayerName = () => playerName;
  const getMarker = () => marker;

  return {getPlayerName, getMarker}

};

function GameController () {
  const board = gameBoard;
  const playerOne = player("Player one","O")
  const playerTwo = player("Player two","X")

  let currentPlayerTurn = playerOne

  const getActivePlayer = () => currentPlayerTurn

  const switchTurns = () => {
    currentPlayerTurn = (currentPlayerTurn === playerOne? playerTwo : playerOne)
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

  const gameOver = () => {
   board.getBoard().forEach((row) => {
     if ((row.every((cell) => {
      cell.getValue() === 'X'
     })) ) {return 'hi'}
    })
  }

  return {getBoard: board.getBoard,
          playRound,
          getActivePlayer,
          gameOver}
};


function ScreenController () {
  const game = GameController();
  const playerTurnDiv = document.querySelector('.turn')
  const boardDiv = document.querySelector('.board')

  const updateScreen = () =>{
    //clear board
    boardDiv.textContent = ""

    const board = game.getBoard();
    const activePlayer = game.getActivePlayer()
    //Display players turn
    console.log(game.gameOver())
    if (game.gameOver()) { playerTurnDiv.textContent = "Game Over" }
    else { 
    playerTurnDiv.textContent = `${activePlayer.getPlayerName()}'s turn`
    }
    //Render board squares
    board.forEach ((row,index) => {
      row.forEach((cell,indx) =>{
        cellButton = document.createElement("button")
        cellButton.classList.add("cell")
        cellButton.dataset.column = indx
        cellButton.dataset.row = index
        cellButton.textContent = cell.getValue()
        boardDiv.appendChild(cellButton)
      })
    })
  }

  function clickHandlerBoard (e){
    const selectedRow = e.target.dataset.row;
    const selectedColumn = e.target.dataset.column;
    game.playRound(selectedRow,selectedColumn)
    game.gameOver()
    updateScreen();
  };

  boardDiv.addEventListener('click',clickHandlerBoard);
  //initial render
  updateScreen();

};

ScreenController();