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

const jim = Player('x','Jim')
const james = Player('x','James')

const gameController = ((playerOne,playerTwo) =>{
  let currentTurn = playerOne
  const playersTurn = (playerOne,playerTwo) => {
     currentTurn = ('currentTurn' == playerOne) ? playerOne : playerTwo
     console.log(currentTurn)
   }
  return{currentTurn,playersTurn}
})(jim,james);
