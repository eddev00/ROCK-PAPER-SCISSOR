const btns = document.querySelectorAll(".hand");
const results = document.querySelector(".result");
const buttonPlayAgain = document.querySelector(".reset");

let choices = ["rock", "paper", "scissor"];
let playerLives = 0;
let computerLives = 0;

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

function endGame(playerLives, computerLives) {
  if (playerLives == 5 || computerLives == 5) {
    btns.forEach((btn) => {
      btn.setAttribute("disabled", "");

      if (playerLives > computerLives) {
        results.innerText = `Congrats you won`;
      } else {
        results.innerText = `baaad you lost`;
      }
    });
  }
}

function resetGame() {
  buttonPlayAgain.setAttribute("enabled", "");
  buttonPlayAgain.addEventListener("click", () => {
    console.log("reset");
    window.location.reload();
  });
}

function playRound() {
  let playerSelected;
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      playerSelected = btn.className;
      console.log("player choice " + playerSelected);
      const computerSelection = getComputerChoice();
      console.log("computer choice " + computerSelection);
      switch (true) {
        case playerSelected === computerSelection:
          results.innerText = `it's a draw`;
          console.log("draw");
          break;
        case playerSelected === "rock" && computerSelection === "scissor":
        case playerSelected === "paper" && computerSelection === "rock":
        case playerSelected === "scissor" && computerSelection === "paper":
          playerLives += 1;
          results.innerText = `You win`;
          console.log("win");
          break;

        default:
          results.innerText = `You loose`;
          computerLives += 1;

          break;
      }
      endGame(playerLives, computerLives);
      resetGame();
    });
  });
}

playRound();
