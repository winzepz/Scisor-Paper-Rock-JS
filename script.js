let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';

function scissors() {
  let userMove = 2;
  startGame(userMove);
}

function paper() {
  let userMove = 1;
  startGame(userMove);
}

function rock() {
  let userMove = 0;
  startGame(userMove);
}

function calcResult(userMove, computerMove) {
  let action;
  if (userMove == computerMove) {
    action = tieMsg;
  } else if (
    (userMove == 0 && computerMove == 2) ||
    (userMove == 2 && computerMove == 1) ||
    (userMove == 1 && computerMove == 0)
  ) {
    action = winMsg;
  } else {
    action = loseMsg;
  }

  endGame(action);
}

function endGame(action) {
  document.getElementById("status-head").innerHTML = action;
  showPlayAgainButton();
}

function startGame(userMove) {
  let computerMove = Math.floor(Math.random() * 3);
  calcResult(userMove, computerMove);
  updateMoveValue(userMove, computerMove);
  hideButtons();
}

function hideButtons() {
  const buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}

function showPlayAgainButton() {
  const playAgainButton = document.getElementById("play_again-button");
  playAgainButton.style.display = "inline-block";
}

function updateMoveValue(userMove, computerMove) {
  document.getElementById("user-move-value").textContent ="You Played " + getMoveName(userMove);
  document.getElementById("computer-move-value").textContent = " Computer Played " + getMoveName(computerMove);
}

function getMoveName(move) {
  if (move === 0) {
    return "Rock";
  } else if (move === 1) {
    return "Paper";
  } else if (move === 2) {
    return "Scissors";
  }
}


function play_again() {
  showButtons();
  hidePlayAgainButton();
  clearResult();
}

function showButtons() {
  const buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "inline-block";
  }
}

function hidePlayAgainButton() {
  const playAgainButton = document.getElementById("play_again-button");
  playAgainButton.style.display = "none";
}

function clearResult() {
  document.getElementById("status-head").innerHTML = "Choose!";
  document.getElementById("computer-move-value").innerHTML = "";
  document.getElementById("user-move-value").innerHTML = "";

}
