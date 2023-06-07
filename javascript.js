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
    const availableCells = board.filter((row)=>row[column].getValue == 0).map((row)=>row[column])
    
  }
  

  return{getBoard, printBoard, selectCell}

})();

const Player = (name,mark) =>{
 const name = name
 const mark = mark

 const getName = () => name

 return{getName}


};


const gameController = (() =>{

})();

gameBoard.printBoard()
gameBoard.selectCell(0,0)






