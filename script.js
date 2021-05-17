'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //getting element by ID
const diceEl = document.querySelector('.dice');

//setting them to 0
score0El.textContent = 0;
score1El.textContent = 0;

//hiding the dice
diceEl.classList.add('hidden');
