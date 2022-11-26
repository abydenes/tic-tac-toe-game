const Player = (sign) => {
  this.sign = sign;

  const getSign = () => sign;

  return { getSign };
};

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const setCell = (index, sign) => (board[index] = sign);

  const getCell = (index) => board[index];

  const reset = () => board.map((x) => (x = ""));

  return { setCell, getCell, reset };
})();

const gameController = (() => {
  const markCell = (index, sign) => {
    gameBoard.setCell(index, sign);
  };

  const checkWinner = () => {

  }

  const resetGame = () => {
    
  }

  return { markCell };
})();

const displayController = (() => {
  const gameboardContainer = document.querySelector(".gameboard-container");
  const cells = document.querySelectorAll(".cell");
  const gameStatusMessage = document.querySelector(".game-status-message");
  const resetGameButton = document.querySelector(".reset-game-button");

  const displayBoard = () => {
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = gameBoard.getCell(i);
    }
  };

  cells.forEach((cell) =>
    cell.addEventListener("click", () => {
      gameBoard.setCell(cell.dataset.index, "X");
      displayBoard();
    })
  );

  return { displayBoard };
})();
