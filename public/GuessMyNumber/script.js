'use strict';
/*
//DOM is WEB APIs

// This is selecting a class
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


*/

let target = Math.ceil(Math.random() * 20);
let highscore = 0;

// console.log(target);

//event handler
document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  //   console.log(typeof guessValue);
  let currScore = Number(document.querySelector('.score').textContent);
  //   console.log(currScore);
  if (currScore > 1) {
    //Player Wins!
    if (guessValue === target) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = target;
      document.querySelector('.number').style.width = '30rem';
      // document.
      if (currScore > highscore) {
        highscore = currScore;
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.message').textContent = 'Correct!';
      }
      //WRONG GUESS
    } else {
      if (guessValue > target) {
        document.querySelector('.message').textContent = 'DOWN';
      } else {
        document.querySelector('.message').textContent = 'UP';
      }
      document.querySelector('.score').textContent = currScore - 1;
    }
  } else {
    document.querySelector('.message').textContent = 'FAIL';
    document.querySelector('.number').textContent = target;
    document.querySelector('.score').textContent = '0';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset current score
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  target = Math.ceil(Math.random() * 20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
