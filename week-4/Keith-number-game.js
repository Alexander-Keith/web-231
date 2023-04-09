/*
=================================================
;  Title: Keith-temp-conversion.js
;  Author: Alexander Keith
;  Date: 4/8/2023
;  Description: Keith-number-game.js file for assignment 4.2 - Number Guessing Game
;================================================
*/

//Generates random number between 1 and 10
const rnd = Math.floor(Math.random() * 10) + 1;

//Declare a function to check guess and variable for submitted guess
function submit(){
    const guess = document.getElementById('guessNumber').value;

    //Declare variables  with string values for if the guess was too high, low or correct
    const msgGreaterThan = "The number is greater than";
    const msgLessThan= "The number is less than";
    const msgCongrats = "Congratulations! you picked the correct number!";

    //if, else if, and else decision tree for low, high, and correct guesses
    if (rnd<guess){
        document.getElementById("results").innerHTML = msgLessThan + " " + guess;
    } 
    
    else if (rnd>guess){
        document.getElementById("results").innerHTML = msgGreaterThan + " " + guess;
    } 
    
    else {
        document.getElementById("results").innerHTML = msgCongrats;
    }
}