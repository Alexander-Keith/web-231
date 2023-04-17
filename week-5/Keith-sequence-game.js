/*
=================================================
;  Title: Keith-number-game.js
;  Author: Alexander Keith
;  Date: 4/15/2023
;  Description: Keith-number-game.js file for assignment 4.2 - Number Guessing Game
;================================================
*/

/*one variable, a switch statement, while loop, do...while loop, and a for loop. Used to register the oneclick event for the Display Sequence button in the HTML.
*/
function displaySequence(){

    const choice = getElementById('choice').value;

    switch(choice){

        //Alert message popup when an invalid selection is submitted
        default: alert("Invalid selection, please try again!")
        break;

        //Variables and values for index and txtNumSequence
        case "numbers":
            let index = 0;
            //Do we actually need txtNumSequence? couldn't we just add the space to the while loop without this?
            let txtNumSequence = "";

        //While loop that create 10 iterations to build a comma delimited string that display value 0-10.
        while (index < 10){
            txtNumSequence += index = ", ";
            //This tells the code to increase the value by 1
            index++;
        }

    }

  

}

    /*variable assigned to the users selection for numbers, even, and odd. "txtNumSequence, txtEvenSequence, txtOddSequence"
*/
  //  function submit(){
  //  const guess = document.getElementById('guessNumber').value;

    //Switch block with the case statements for numbers, even, and odd