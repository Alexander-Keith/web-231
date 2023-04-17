/*
=================================================
;  Title: Keith-sequence-game.js
;  Author: Alexander Keith
;  Date: 4/15/2023
;  Description: Keith-sequence-game.js file for assignment 5.2 - Sequence Game
;================================================
*/

/*one variable, a switch statement, while loop, do...while loop, and a for loop. Used to register the oneclick event for the Display Sequence button in the HTML.
*/
function displaySequence(){
    const choice = document.getElementById('choice').value;
  
    switch(choice){
    
        //Variables and values for index and txtNumSequence
        case "numbers":
            let index = 0;
            let txtNumSequence = "";
  
        //While loop that create 10 iterations to build a comma delimited string that display value 0-10.
        while (index <= 10){
            txtNumSequence += index + ", ";
            //This tells the code to increase the value by 1
            index++;
        }
        
        document.getElementById('results').innerHTML = txtNumSequence;
        break;
  
      case "even":
        // code to display even numbers
        break;
  
      case "odd":
        // code to display odd numbers
        break;

    //Alert message popup when an invalid selection is submitted
    default: alert("Invalid selection, please try again!");
    }
  }
  