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
    if (board[row][column].getValue() != 0) console.log('unavailable') 
    board[row][column].addMarker(player)
    console.log(board[row][column].getValue())
    return
  }
  

  return{getBoard, printBoard, selectCell, board}

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
  // const players = [
  //   {name: playerOne.getName(),
  //    marker: playerOne.getMarker
  //   },
  //   {name: playerTwo.getName(),
  //   marker: playerTwo.getMarker
  //   },
  // ]

  let currentPlayerTurn = playerOne

  const switchTurns = () => {
    currentPlayerTurn = currentPlayerTurn === playerOne ? playerTwo : playerOne
  }
  const printNewRound = () => {
    board.printBoard()
    console.log(`${currentPlayerTurn.getName()}'s turn`)
  }

  const playRound = (column,row) =>{
    console.log(`Selected ${currentPlayerTurn.getName()}'s mark selected ${row} and ${column}`)
    board.selectCell(row,column,currentPlayerTurn.getMarker)

    switchTurns()
    printNewRound()
  }
  printNewRound()
  return {currentPlayerTurn,playRound}
})();

function ScreenController () {
  const game = gameController
  const playerTurnDiv = document.querySelector('.turn')
  const boardDiv = document.querySelector('.board')

  const updateScreen = () =>{
    // clear board
    boardDiv.textContent = ""
    //get newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.currentPlayerTurn();
    //Display players turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`
    //Render board squares
    board.forEach(row =>{
      row.forEach((cell,index)=>{
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell")
        //create data attribute to identify column
        //This makes it easier to pass into our 'playRound'Function
        cellButton.dataset.column = index
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton)
      })
    })
  }

const clickHandlerBoard = () => {

};

};






