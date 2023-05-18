const gameboard = (() => {
  let board = ['X','O','X'
              ,'O','X','O'
              ,'X','O','X'];
  //select
  const dividOne = document.querySelectorAll('.divider');

  //createboard
  const createBoard = () => {
    const divider  = '---|---|---'
    dividOne.forEach((line) => {
      line.textContent = divider
    });
  };
  //render
  createBoard()
  return {board}
})();


const Player = (playerOne,playerTwo) =>{
};
