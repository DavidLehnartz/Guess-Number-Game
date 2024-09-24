'use strict';

/* MAIN SCRIPT */


let randomNumberToGuess = Math.round(Math.random() * 10);


let tries = 0;

// Init (ONLOAD)
function init() {

}


// Count Tries
function countTries() {
    tries++;
    document.getElementById('tries').innerHTML = `Tries: ${tries}`;
}


//
function showResult() {
    let inputRef = document.getElementById('input_number').value;

    if (randomNumberToGuess == inputRef) {
        document.getElementById('result').innerHTML = `Sweet! You choosed the correct number🎉`;
        ClearInput();
    } else if (randomNumberToGuess < inputRef) {
        document.getElementById('result').innerHTML = `Daaaaang! Number is to high`;
    } else if (randomNumberToGuess > inputRef) {
        document.getElementById('result').innerHTML = `Nope! Number is to low`;
    }

    countTries();
}


// clear Input And Tries
function ClearInput() {
    let clearedInput = document.getElementById('input_number');
    clearedInput = input_number.value = '';
}





