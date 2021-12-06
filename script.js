let weapons = document.querySelectorAll('.weapons');
let section = document.querySelector('section');

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

let cpuScore = 0;
let playerScore = 0;
let roundCounter = 0;
let isGameOver = false;

function computerPick() {
  const elements = [rock, paper, scissors];
  return elements[Math.floor(Math.random() * elements.length)];
}

function round(playerPick, computerPick) {
  roundCounter++;
  let result = '';
  if (
    (playerPick === rock && computerPick === scissors) ||
    (playerPick === paper && computerPick === rock) ||
    (playerPick === scissors && computerPick === paper)
  ) {
    playerScore++;
    changeSectionBG('#009900 ');

    result = `You Win! ${playerPick} beats ${computerPick}.`;
  } else if (
    (playerPick === rock && computerPick === paper) ||
    (playerPick === paper && computerPick === scissors) ||
    (playerPick === scissors && computerPick === rock)
  ) {
    cpuScore++;
    changeSectionBG('#CC0000 ');

    result = `You lose! ${computerPick} beats ${playerPick}.`;
  } else if (playerPick === computerPick) {
    changeSectionBG('#0000FF');

    result = `Draw! ${computerPick} doesn't beat ${playerPick}. 
    They are Brother.`;
  } else {
    result = 'Some errors occured.';
  }

  if (playerScore < 5 && cpuScore < 5) {
    document.querySelector('.round').innerHTML = 'Round ' + roundCounter;
    document.querySelector('.score').innerHTML = playerScore + ' - ' + cpuScore;
  } else if (playerScore === 5) {
    document.querySelector('.round').innerHTML = 'GAME IS OVER';
    document.querySelector('.score').innerHTML = 'YOU ARE THE CHAMPION!!!';

    restart();
    return '';
  } else if (cpuScore === 5) {
    document.querySelector('.round').innerHTML = 'GAME IS OVER';
    document.querySelector('.score').innerHTML = 'YOU ARE THE LOSER!!!';

    restart();
    return '';
  }

  return result;
}

function restart() {
  document.querySelector('.boxes').style.display = 'none';
  document.querySelector('.select').style.display = 'none';
  let tryAgain = document.querySelector('.try-again');

  tryAgain.style.cssText = `background: rgb(224, 224, 15);
    background: linear-gradient(270deg, #d8accb 0%, rgb(147, 185, 211) 100%);
    color: rgb(255, 17, 0);
    border-radius: 80px;
    padding: 15px;
    width: 100px;
    margin: auto;
    font-size: 15px;`;

  tryAgain.innerHTML = 'Restart';

  tryAgain.onmouseover = () => {
    tryAgain.style.cssText = `background: rgb(224, 224, 15);
    background: linear-gradient(270deg, #d8accb 0%, rgb(147, 185, 211) 100%);
    color: rgb(255, 17, 0);
    border-radius: 80px;
    padding: 15px;
    width: 100px;
    margin: auto;
    font-size: 20px;`;
  };

  tryAgain.addEventListener('click', () => {
    playerScore = 0;
    cpuScore = 0;
    roundCounter = 0;
    document.querySelector('.round').innerHTML = '';
    document.querySelector('.score').innerHTML = '';
    section.style.cssText = ``;
    tryAgain.innerHTML = '';
    tryAgain.style.cssText = ``;
    document.querySelector('.boxes').style.display = 'flex';
    document.querySelector('.select').style.display = 'flex';
  });
}

function changeSectionBG(color) {
  section.style.cssText = `
      background-color : ${color};
      width: 300px;
      border-radius: 30px;
      padding: 0 5px 15px 5px;
      margin-top: 15px;`;
}

for (let i = 0; i < weapons.length; i++) {
  weapons[i].addEventListener('click', function a() {
    let playerPick = this.id;

    document.querySelector('#result').innerHTML = round(
      playerPick,
      computerPick()
    );
  });
}
