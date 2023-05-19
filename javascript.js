const gameboard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;

  //createboard
  const createBoard = () => {
    for (let i = 0; i < rows.length; i++){
      board[i] = []
      for(let j = 0; j < columns.length;j++){
      board[i].push(Cell())
      }
    }
  };

  function Cell(){
    let value = 0
  };

  //render
createBoard()
  return {board}
})();


const Player = (playerOne,playerTwo) =>{
};
