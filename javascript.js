const gameboard = (() => {
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
    let value = 0
    const addMarker = (player) => {
      value = player
    }
    const getValue = () => value;

  }

})();

const Player = () =>{

};


const gameController = (() =>{

})();






