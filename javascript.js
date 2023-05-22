const gameboard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;

  //createboard
  function createBoard(){
    for (let i = 0; i < rows; i++){
      board[i] = []
      for(let j = 0; j < columns;j++){
      board[i].push(cell())
      }
      return {board}
    }
  };

  function cell(){
    let value = 0
    const marker = (mark) =>{
      value = mark
      console.log(value)
    }
      return{marker}
    };
  return {board,cell,createBoard}
})();



const Player = (mark,name) =>{
  const getMarker = () => mark
  const getName = () => name

  return{getName, getMarker}
};


const gameController = (() =>{
  const players = {
    playerOne: Player('x','James'),
    playerTwo: Player('o','Jimmy')
  }
  let currentTurn = players.playerOne
  let currentBoard = gameboard.createBoard()

  const switchTurn = () => {
     currentTurn = ('currentTurn' == players.playerOne) ? players.playerTwo : players.playerOne
     console.log(currentTurn)
   }
  return{currentTurn,switchTurn,currentBoard}
})();
