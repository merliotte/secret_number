'use strict';

// document.querySelector('.message').textContent = 'Correct Number 🏆 ';
// document.querySelector('.score').textContent = 13;
// document.querySelector('.number').textContent = 20;
// document.querySelector('.guess').textContent = 20;

// Inclure le nombre secret

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No Number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 🛑 ';
    // WIN
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🏆 ';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '8rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ';
      score--;
      document.querySelector('.score').textContent = 0;
    }
    // Guess low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
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
