let choices = ["rock", "paper", "scissor"];

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

let checkPlayerSelection = () => {
  let playerSelection = window.prompt("Enter your hand: ").toLowerCase();
  if (
    playerSelection !== choices[0] &&
    playerSelection !== choices[1] &&
    playerSelection !== choices[2]
  ) {
    alert("Bad input! try again.");
    return checkPlayerSelection();
  } else {
    return playerSelection;
  }
};

let playRound = () => {
  const playerSelected = checkPlayerSelection();
  console.log("player choice" + playerSelected);

  const computerSelection = getComputerChoice();
  console.log("computer choice" + computerSelection);

  if (playerSelected === computerSelection) {
    return 0;
  }
  if (playerSelected == "rock" && computerSelection == "scissor") {
    return 1;
  }
  if (playerSelected == "rock" && computerSelection == "paper") {
    return -1;
  }
  if (playerSelected == "paper" && computerSelection == "scissor") {
    return -1;
  }
  if (playerSelected == "paper" && computerSelection == "rock") {
    return 1;
  }
  if (playerSelected == "scissor" && computerSelection == "paper") {
    return 1;
  }
  if (playerSelected == "scissor" && computerSelection == "rock") {
    return -1;
  }
};
