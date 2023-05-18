const gameboard = (() => {
  let board = [1,2,3,4,5,6,7,8,9];
  //createboard
  const createBoard = () => {
    const firstRow = board.slice(0,3)
    const secRow = board.slice(3,6)
    const thirdRow = board.slice(6,9)
    console.log({firstRow, secRow, thirdRow})
  };
  //render
  createBoard()
  return {board}
})();


const Player = (name) =>{
};
