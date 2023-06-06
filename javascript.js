const gameboard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;

  //createboard
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  function Cell(x){
    let value = 1
    const marker = (mark) =>{
      value = mark
      console.log(value)
    }
      return{marker}
    };

    const renderBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      console.log(boardWithCellValues);
    }

  return {renderBoard}
})();


const Player = (mark,name) =>{
  const getMarker = () => mark
  const getName = () => name

  function select(board,pos){
    position = pos.split(",")
    board[position[0]][position[1]] = mark
  }

  return{getName, getMarker, select}
};


const gameController = (() =>{

  const players = {
    playerOne: Player('x','James'),
    playerTwo: Player('o','Jimmy')
  }
  let currentTurn = players.playerOne

  const switchTurn = () => {
     currentTurn = currentTurn == players.playerOne ? players.playerTwo : players.playerOne
   }

  function gameOver (){
 
  }
  

  const playRound = () =>{

    }
  return{currentTurn,playRound,gameOver}
})();


let james = Player('x', 'james')

gameController.playRound()
