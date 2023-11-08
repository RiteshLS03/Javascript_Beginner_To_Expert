'use strict';
/** 73 Handling Click Events */
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector('.guess').value);

// /**
// document.querySelector('.score').textContent = 13;
// document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 13;

// */

/** 74 to 76 Implementing the game logic */

// created a random number and passed it to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//created a score for counting

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    //when the guess in right
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🥳 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber) {
    //when the guess in wrong

    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😓 You Lost The Game';
    }
  } else if (guess < secretNumber) {
    //when the guess in wrong

    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😓 You Lost The Game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
/** 74 Implementing the Game Logic */
