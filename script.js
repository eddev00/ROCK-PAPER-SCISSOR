let playerLives = 3;
let computerLives = 3;
let roundCount = 0;
let choices = ["rock", "paper", "scissor"];

const Round_Display = document.querySelector(".Rounds");
const Player_hearts = document.querySelector(".player-lives");
const Computer_hearts = document.querySelector(".computer-lives");
const Round_result = document.querySelector("#RER");

const resetbtn = document.querySelector(".reset");
const reset = () => {
  resetbtn.addEventListener("click", () => {
    location.reload();
  });
};
reset();

const updateRounds = () => {
  console.log("updated");
  if (roundCount == 0) {
    Round_Display.innerHTML = "Make a choice";
  } else {
    Round_Display.innerHTML = "Round " + roundCount;
  }
};

const player_hand = document
  .getElementById("player-choices")
  .querySelectorAll("div");

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

function playRound() {
  let playerSelected;
  player_hand.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (playerLives > 0 && computerLives > 0) {
        roundCount += 1;
        updateRounds();
        playerSelected = btn.className;
        const player_selection_display =
          document.querySelector(".Show-player-hand");
        if (playerSelected == "scissor") {
          player_selection_display.src = "images/Sscissor.png";
        } else if (playerSelected == "paper") {
          player_selection_display.src = "images/Spaper.png";
        } else {
          player_selection_display.src = "images/Srock.png";
        }
        console.log("player choice " + playerSelected);
        const computerSelection = getComputerChoice();
        const computer_selection_display = document.querySelector(
          ".Show-computer-hand"
        );
        if (computerSelection == "scissor") {
          computer_selection_display.src = "images/Sscissor.png";
        } else if (computerSelection == "paper") {
          computer_selection_display.src = "images/Spaper.png";
        } else {
          computer_selection_display.src = "images/Srock.png";
        }
        console.log("computer choice " + computerSelection);
        switch (true) {
          case playerSelected === computerSelection:
            Round_result.innerText = `it's a draw`;
            console.log(computerLives);
            break;
          case playerSelected === "rock" && computerSelection === "scissor":
          case playerSelected === "paper" && computerSelection === "rock":
          case playerSelected === "scissor" && computerSelection === "paper":
            computerLives -= 1;
            const Chrt = document.querySelector(".CH");
            Chrt.parentElement.removeChild(Chrt);
            if (computerLives == 0) {
              Round_result.innerText = `Victory`;
            }
            Round_result.innerText = `You win`;
            console.log(computerLives);
            break;

          default:
            Round_result.innerText = `You loose`;
            const Phrt = document.querySelector(".PH");
            Phrt.parentElement.removeChild(Phrt);
            playerLives -= 1;
            if (playerLives == 0) {
              Round_result.innerText = `Defeat`;
            }
            console.log(computerLives);
            break;
        }
      }
    });
  });
}

playRound();

/*const btns = document.querySelectorAll(".hand");
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

playRound();*/
