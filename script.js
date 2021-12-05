'use strict';

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

const elements = [rock, paper, scissors];

function computerPlay() {
  return elements[Math.floor(Math.random() * elements.length)];
}

function playerPlay() {
  return rock;
}

function round(playerPick, computerPick) {
  if (
    (playerPick === rock && computerPick === scissors) ||
    (playerPick === paper && computerPick === rock) ||
    (playerPick === scissors && computerPick === paper)
  ) {
    return `You Win! ${playerPick} beats ${computerPick}.`;
  } else if (
    (playerPick === rock && computerPick === paper) ||
    (playerPick === paper && computerPick === scissors) ||
    (playerPick === scissors && computerPick === rock)
  ) {
    return `You lose! ${computerPick} beats ${playerPick}.`;
  } else {
    return `Draw! ${computerPick} doesn't beat ${playerPick}. 
    They are Brother.`;
  }
}

document.getElementById('result').innerText = round(
  playerPlay(),
  computerPlay()
);

/*
function game() {
    let loop = 5;
    let score = 0;
    while (loop > 0) {
        score += round(playerPlay(), computerPlay());
        loop--;
        console.log(typeof score);
    }
    if (score > 0) {
        console.log("You win!");
    } else if (score < 0) {
        console.log("You lose!");
    } else if (score == 0) {
        console.log("Tie!")
    }
}

game(); */
