const gameBoard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;
  i = 0
  c = 0
  for (i = 0; i < rows; i++) {
    board.push([])
    for (c = 0; c < columns; c++){
      board[i][c] = Cell()
    }
  } 

  const getBoard = () => board

  const printBoard = () => {
    boardWithValues =board.map(row => row.map(cell => cell.value = 0))
    console.log(boardWithValues)
  }

  function Cell(){
    const value = 0
    const addMarker = (player) => player.mark

    const getMark = () => mark
    const getValue = () => value

    return {addMarker, getValue, getMark}
  }
    

return {getBoard, printBoard}

})();

gameBoard.printBoard()