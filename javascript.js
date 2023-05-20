const gameboard = (() => {
  const board = [];
  const rows = 3;
  const columns = 3;

  //createboard
  const createBoard = () => {
    for (let i = 0; i < rows; i++){
      board[i] = []
      for(let j = 0; j < columns;j++){
      board[i].push(cell)
      }
    }
  };

  const cell = (() =>{
    console.log('hello')
    let value = 0
    const marker = (mark) =>{
      value = mark
      console.log(value)
    }
      return{marker}
  })();

  //render
 createBoard()
  return {board,cell}
})();
gameboard.cell.marker('x')
const Player = (playerOne,playerTwo) =>{
};
