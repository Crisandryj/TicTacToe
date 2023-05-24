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
    return {board}
  };

  function cell(){
    let value = ''
    const marker = (mark) =>{
      value = mark
      console.log(value)
    }
      return{marker}
    };

    function drawBoard(){
      let a = ('     ' +'|'+ '     ' +'|'+'     '+'\n'
              +' ___ ' +'|'+ ' ___ ' +'|'+ ' ___ '+'\n'
              +'     ' +'|'+ '     ' +'|'+ '     '+'\n'
              +' ___ ' +'|'+ ' ___ ' +'|'+ ' ___ '+'\n'
              +'     ' +'|'+ '     ' +'|'+ '     '+'\n'
              )
      console.log(a)
    }
  return {board,cell,createBoard,drawBoard}
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
  const row1 = currentBoard.board[0]
  const row2 = currentBoard.board[1]
  const row3 = currentBoard.board[2]

  const switchTurn = () => {
     currentTurn = currentTurn == players.playerOne ? players.playerTwo : players.playerOne
     console.log(currentTurn)
   }

  const playRound = () => {
    gameboard.drawBoard()
  }
  return{currentTurn,switchTurn,currentBoard,playRound}
})();


gameController.playRound()
