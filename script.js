const container = document.querySelector(".container");

const game = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  let turn = true;

  function mark(e) {
    if (e.target.tagName === "TD" && e.target.innerText === "") {
      if (game.turn) {
        e.target.innerText = "X";
        game.turn = false;
      } else {
        e.target.innerText = "O";
        game.turn = true;
      }
    }
  }

  function isGameOver() {
    
  }

  return { gameboard, turn, mark, isGameOver };
})();

const displayController = (() => {
  const td = container.querySelectorAll("td");
  const p = container.querySelector("p");

  function updateDisplay() {
    game.turn
      ? (p.innerText = "it is player1's turn")
      : (p.innerText = "it is player2's turn");
    for (let i = 0; i < 9; i++) {
      game.gameboard[i] = td[i].innerText;
    }
    console.log(game.gameboard);
  }

  return { updateDisplay };
})();

const PlayerFactory = (name) => {
  const makeMove = () => {
    console.log(`${name} makes a move!`);
  };
  const win = () => {
    console.log(`${name} wins!`);
  };
  const lose = () => {
    console.log(`${name} loses!`);
  };

  return { name, makeMove, win, lose };
};

const player1 = PlayerFactory("player1");
const player2 = PlayerFactory("player2");

container.addEventListener("click", (e) => {
  game.mark(e);
  displayController.updateDisplay();
  game.isGameOver();
});
