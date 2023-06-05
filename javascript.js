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

  function cell(x){
    let value = 1
    const marker = (mark) =>{
      value = mark
      console.log(value)
    }
      return{marker}
    };

   function renderBoard(board){
      for(let i = 0; i < 3; i++){
        console.log(board[i]) }
    }

  return {createBoard,renderBoard}
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
  const currentBoard = gameboard.createBoard()
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
      gameboard.renderBoard(currentBoard.board)
      console.log(currentTurn.getName() + " it's your turn")
      const input = prompt('make your move')
      players.playerOne.select(currentBoard.board,input)
      gameboard.renderBoard(currentBoard.board)
      switchTurn()
    end 
    }
  return{currentTurn,playRound}
})();


let james = Player('x', 'james')

gameController.playRound()
