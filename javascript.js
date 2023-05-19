const gameboard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;

  //createboard
  const createBoard = () => {
    for (let i = 0; i < rows; i++){
      board[i] = []
      for(let j = 0; j < columns;j++){
      board[i].push(cell())
      }
    }
  };

  const cell = () =>{
    let value = 0
    return{value}
  }

  //render
 createBoard()
  return {board}
})();

console.log(gameboard.board)


const Player = (playerOne,playerTwo) =>{
};
