const container = document.querySelector(".container")

const gameBoard = (() => {
  let gameboard = ["O","X","O","X","O","X","O","O","X"];


  return {gameboard}

})();

const displayController = ((gameboard) => {
  const row1 = container.querySelector(".row1")
  const row2 = container.querySelector(".row2")
  const row3 = container.querySelector(".row3")

  row1.children[0].innerText = gameBoard.gameboard[0]
  return {}
  
})()

const PlayerFactory = (name) => {

}

container.addEventListener("click", (e) => {
  console.log(e)
})