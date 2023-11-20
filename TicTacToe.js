let board = ['', '', '', '', '', '', '', '', '_'];
let isGameOver = false;

let play = (symbol, cellNo) => {
  if (!isGameOver) {
    if ((symbol === 'X' || symbol === 'O') && cellNo >= 0 && cellNo < 9 && board[cellNo] === '_') {
      board[cellNo] = symbol;
    } else {
      console.log("Invalid move!");
      return;
    }

    if (checkWin('X')) {
      console.log("Player X won!");
      isGameOver = true;
    } else if (checkWin('O')) {
      console.log("Player O won!");
      isGameOver = true;
    } else if (checkDraw()) {
      console.log("It's a draw!");
      isGameOver = true;
    }
  }
}

function checkWin(symbol) {
  // Check rows, columns, and diagonals for a win
  return (
    (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
    (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
    (board[6] === symbol && board[7] === symbol && board[8] === symbol) ||
    (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
    (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
    (board[2] === symbol && board[5] === symbol && board[8] === symbol) ||
    (board[0] === symbol && board[4] === symbol && board[8] === symbol) ||
    (board[2] === symbol && board[4] === symbol && board[6] === symbol)
  );
}

function checkDraw() {
  return board.every(cell => cell !== '_');
}