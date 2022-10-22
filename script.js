const p = document.querySelector("p");
const tds = document.querySelectorAll("td");
const h3 = document.querySelector("h3");
const btn = document.querySelector("button");
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameEnd = false;
const winC = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

tds.forEach((td) =>
  td.addEventListener("click", (e) => {
    updateDisplay(td, e);
    checkWinOrDraw();
  })
);

function checkWinOrDraw() {
  for (let i = 0; i < winC.length; i++) {
    if (
      board[winC[i][0]] === "X" &&
      board[winC[i][1]] === "X" &&
      board[winC[i][2]] === "X"
    )
      someoneWon("x");
    else if (
      board[winC[i][0]] === "O" &&
      board[winC[i][1]] === "O" &&
      board[winC[i][2]] === "O"
    )
      someoneWon("O");
  }
  if (!board.includes("") && gameEnd !== true) {
    gameEnd = true;
    p.textContent = "It's a draw!";
  }
}

function updateDisplay(td, e) {
  if (board[e.target.dataset.index] == "" && !gameEnd) {
    td.textContent = currentPlayer;
    board[e.target.dataset.index] = td.textContent;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    p.textContent = `It is ${currentPlayer}'s turn`;
  }
}

function someoneWon(player) {
  gameEnd = true;
  p.textContent = `Game over, ${currentPlayer == "X" ? "O" : "X"} won!`;

}

btn.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  tds.forEach((td) => (td.textContent = ""));
  currentPlayer = "X";
  p.textContent = `It is ${currentPlayer}'s turn`;
  gameEnd = false;
});
