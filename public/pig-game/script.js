'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //Supposed to be faster
const curr0El = document.querySelector('#current--0');
const curr1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Condition
score0El.textContent = 0;

score1El.textContent = 0;

diceEl.classList.add('hidden');
let player0 = true;
let playing = true;

//functions
let switching = function () {
  if (player0) {
    curr0El.textContent = 0;
  } else {
    curr1El.textContent = 0;
  }
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  player0 = !player0;
};

//Event Handler
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    //display Dice rool

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;

    //Check for 1. If so switch
    if (diceNum === 1) {
      switching();
    } else {
      if (player0) {
        curr0El.textContent = parseInt(curr0El.textContent) + diceNum;
      } else {
        curr1El.textContent = parseInt(curr1El.textContent) + diceNum;
      }
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (player0) {
      score0El.textContent =
        parseInt(score0El.textContent) + parseInt(curr0El.textContent);
      if (score0El.textContent >= 40) {
        document.querySelector('.player--0').classList.add('player--winner');
        document.querySelector('.player--0').classList.remove('player--active');
        playing = false;
      }
    } else {
      score1El.textContent =
        parseInt(score1El.textContent) + parseInt(curr1El.textContent);
      if (score1El.textContent >= 40) {
        document.querySelector('.player--1').classList.add('player--winner');
        document.querySelector('.player--0').classList.remove('player--active');
        playing = false;
      }
    }
    switching();
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;

  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  document.querySelector('.player--0').classList.remove('player--winner');

  document.querySelector('.player--1').classList.remove('player--winner');

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  player0 = true;
  playing = true;
});
