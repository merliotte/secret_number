'use strict';

// document.querySelector('.message').textContent = 'Correct Number 🏆 ';
// document.querySelector('.score').textContent = 13;
// document.querySelector('.number').textContent = 20;
// document.querySelector('.guess').textContent = 20;

// Inclure le nombre secret

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No Number
  if (!guess) {
    displayMessage('No number 🛑 ');
    // WIN
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🏆 ');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '8rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high ' : 'Too low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER ');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }

  // Guess high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =  'Too high ' : 'Too low ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'GAME OVER ';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // Guess low
  // }
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'GAME OVER ';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Réinitaliser
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.fontSize = '8rem';
});
