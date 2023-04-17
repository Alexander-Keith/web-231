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
        
        //Puts the JavaScript results to the text element location in the html
        document.getElementById('results').innerHTML = txtNumSequence;
        break;
    


        //Variables and values for evenNumber and txtEvenSequence
        case "even":
            let evenNumber = 0;
            let txtEvenSequence = "";
        
        do {
            txtEvenSequence += evenNumber + ", "
            evenNumber += 2;
        }
        //While loop that create 10 iterations to build a comma delimited string that display value 0-20.
        while (evenNumber < 21);
        
        //Puts the JavaScript results to the text element location in the html
        document.getElementById('results').innerHTML = txtEvenSequence;
        break;



        //Variable and value for txtOddSequence
        case "odd":
            let txtOddSequence = "";

        for (let i = 1; i <20; i +=2)
            txtOddSequence += i + ", ";

        document.getElementById('results').innerHTML = txtOddSequence;
        break;
    


        //Alert message popup when an invalid selection is submitted
        default: alert("Invalid selection, please try again!");

    }

}