

let randumNum = parseInt(Math.random() * 100 +1);//Math.floor(Math.random() * (max - min + 1)) + min;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesseSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if (isNaN(guess)) {
        alert("please enter a valid number");
      }else if(guess<1){
        alert("please enter a number more then 1");
      }else if(guess>100){
        alert("please enter a number less then 100");
      }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randumNum}`);
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
      }
}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMessage(message){

}

function newGame(){

}

function endgame(){

}
