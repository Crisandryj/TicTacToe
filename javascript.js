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
  const getBoard = () => board;

  const selectCell = (row,column,player) => {
    if (board[row][column].getValue() != 0) console.log('unavailable') 
    board[row][column].addMarker(player)
    console.log(board[row][column].getValue())
    return
  }

  const printBoard = () =>{
    const boardWithCellValues = board.map(row => row.map(cell => cell.getValue()))
    console.log(boardWithCellValues)
  }

  return{getBoard, printBoard, selectCell}

})();

function Cell(){
  let value = 0;
  const addMarker = (player) => {
    value = player
  }
  const getValue = () => value;
  return{addMarker, getValue}
}


const Player = (name,mark) =>{
 const getName = () => name
 const getMarker = mark


 return{getName, getMarker}

};


function GameController () {
  const board = gameBoard
  const playerOne = Player("Jim","X")
  const playerTwo = Player("Joe","O")
 

  let currentPlayerTurn = playerOne

  const switchTurns = () => {
    currentPlayerTurn = currentPlayerTurn === playerOne ? playerTwo : playerOne
  }

  const getActivePlayer = () => currentPlayerTurn;

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

 
  return {getActivePlayer,
          playRound,
          getBoard: board.getBoard}
};

function ScreenController () {
  const game = GameController()
  const playerTurnDiv = document.querySelector('.turn')
  const boardDiv = document.querySelector('.board')
 

  const updateScreen = () =>{

    // clear board
    boardDiv.textContent = ""
    //get newest version of the board and player turn
    const board = game.getBoard();
    console.log(board)
    const activePlayer = game.getActivePlayer();
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
        cellButton.dataset.row = cell
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton)
      })
    })
  }
  function clickHandlerBoard(e) {
    const selectedColumn = e.target.dataset.column;
    const selectedRow = e.target.dataset.row;
    if (!selectedColumn) return;
    game.playRound(selectedColumn,selectedRow);
    updateScreen();
  };

  boardDiv.addEventListener("click", clickHandlerBoard)
  
  //initial render
  updateScreen();
};

ScreenController();
