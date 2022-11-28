const Player = (name, sign) => {
  this.name = name;
  this.sign = sign;

  const getName = () => name;

  const setName = (str) => (name = str);

  const getSign = () => sign;

  return { getSign, getName, setName };
};

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const setCell = (index, sign) => (board[index] = sign);

  const getCell = (index) => board[index];

  const reset = () => {
    for (let i = 0; i < 9; i++) {
      board[i] = "";
    }
  };

  return { setCell, getCell, reset };
})();

const gameController = (() => {
  const player1 = Player("player1", "X");
  const player2 = Player("player2", "O");
  let currentPlayer = player1;
  let roundCount = 1;
  let gameOver = false;

  const changeCurrentPlayer = () => {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  };

  const playRound = (index) => {
    if (gameBoard.getCell(index) === "" && !gameOver) {
      gameBoard.setCell(index, currentPlayer.getSign());
      changeCurrentPlayer();
      displayController.displayMessage(`${currentPlayer.getSign()}'s turn`);
      checkWinner();
      displayController.displayBoard();
      roundCount++;
      isDraw();
    } else return;
  };

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    winConditions.forEach((c) => {
      if (
        gameBoard.getCell(c[0]) !== "" &&
        gameBoard.getCell(c[0]) === gameBoard.getCell(c[1]) &&
        gameBoard.getCell(c[1]) === gameBoard.getCell(c[2])
      ) {
        gameOver = true;
        displayController.displayMessage(`${gameBoard.getCell(c[0])} won`);
        displayController.highlightCells(c[0], c[1], c[2]);
      }
    });
  };

  const isDraw = () => {
    if (roundCount == 10 && !gameOver) {
      displayController.displayMessage("draw");
    }
  };

  const reset = () => {
    currentPlayer = player1;
    roundCount = 1;
    gameOver = false;
    displayController.displayMessage(`${currentPlayer.getSign()}'s turn`);
  };

  return { playRound, reset };
})();

const displayController = (() => {
  const cells = document.querySelectorAll(".cell");
  const gameStatusMessage = document.querySelector(".game-status-message");
  const resetGameButton = document.querySelector(".reset-game-button");

  const displayBoard = () => {
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = gameBoard.getCell(i);
    }
  };

  const highlightCells = (cell1, cell2, cell3) => {
    cells[cell1].style.backgroundColor = "aliceblue";
    cells[cell2].style.backgroundColor = "aliceblue";
    cells[cell3].style.backgroundColor = "aliceblue";
  };

  const displayMessage = (msg) => {
    gameStatusMessage.textContent = msg;
  };

  const reset = () => {
    gameBoard.reset();
    gameController.reset();
    displayBoard();
    cells.forEach((cell) => (cell.style.background = "rgb(221, 221, 221)"));
  };

  cells.forEach((cell) =>
    cell.addEventListener("click", () => {
      gameController.playRound(cell.dataset.index);
    })
  );

  resetGameButton.addEventListener("click", reset);

  return { displayBoard, displayMessage, highlightCells };
})();
