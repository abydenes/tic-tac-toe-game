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
  winC.forEach((c) => {
    if (
      board[c[0]].length > 0 &&
      board[c[0]] === board[c[1]] &&
      board[c[1]] === board[c[2]]
    ) {
      someoneWon(`${board[c[0]]}`);
    }
  });
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
