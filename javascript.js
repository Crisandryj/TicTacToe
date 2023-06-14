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
     marker: playerOne.getMarker()
    },
    {name: playerTwo.getName(),
      marker: playerTwo.getMarker()
    },
  ]
  
  return {board, currentTurn}
})();

const jim = Player("Jim","x")

gameController.board.printBoard()
console.log(gameController.currentTurn())




