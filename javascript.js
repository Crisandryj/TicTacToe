const gameboard = (() => {
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
  


  return{getBoard, printBoard}

})();

const Player = () =>{


};


const gameController = (() =>{

})();

gameboard.printBoard()






