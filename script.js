'use strict';

let secretNumber = Math.floor(Math.random() * 20) +1;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
const guess = Number(document.querySelector(".guess").value)


if(!guess){
    document.querySelector('.message').textContent = 'No Number'
} else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct guess'
    document.querySelector('.number').textContent = secretNumber

    document.body.style.backgroundColor = 'red'
} else if(guess > secretNumber){

    if(score > 1){
        document.querySelector('.message').textContent = 'Too high'
        score--
        document.querySelector('.score').textContent = score
    } else {
        document.querySelector('.message').textContent = 'You Lost'
        document.querySelector('.score').textContent = 0
    }

  
} else if(guess < secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = 'Too low'
        score--
        document.querySelector('.score').textContent = score
    } else {
        document.querySelector('.message').textContent = 'You Lost'
        document.querySelector('.score').textContent = 0
    }
}
})


document.querySelector('.again').addEventListener('click', () => {
    score = 20
    secretNumber = Math.floor(Math.random() * 20) +1;
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = "?"
    document.querySelector('.message').textContent = 'Start Guessing...'
    document.body.style.backgroundColor = 'black'
    document.querySelector('.guess').value = ''
})