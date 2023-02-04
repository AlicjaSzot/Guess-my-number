'use strict';

const createSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = createSecretNumber();
let score = 20;
let highscore = 0;
const secretNumberField = document.querySelector('.number');
const scoreField = document.querySelector('.score');
const messageField = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const mainBackground = document.querySelector('.main');

secretNumberField.textContent = '?';

function changeBGtoGreen() {
  mainBackground.classList.add('main--success');
}

const resetGame = () => {
  mainBackground.classList.remove('main--success');
  scoreField.textContent = 20;
  secretNumberField.style.width = '15rem';
  messageField.textContent = 'Start guessing...';
  guessInput.value = null;
  secretNumberField.textContent = '?';
  secretNumber = createSecretNumber();
};

const addGame = () => {
  let guess = Number(guessInput.value);

  secretNumberField.style.width = '30rem';

  if (!guess) {
    messageField.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    messageField.textContent = '🎉 Correct Number!';
    secretNumberField.textContent = secretNumber;
    changeBGtoGreen();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageField.textContent =
        guess > secretNumber ? '📈 To high!' : '📉 To low!';
      score--;
      scoreField.textContent = score;
    } else {
      messageField.textContent = '💥You lost the game!';
      scoreField.textContent = 0;
    }
  }
};

document.querySelector('.again').addEventListener('click', resetGame);

document.querySelector('.check').addEventListener('click', addGame);
