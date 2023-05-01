/*
=================================================
;  Title: Keith-calculator.js
;  Author: Alexander Keith
;  Date: 4/30/2023
;  Description: Keith-calculator.js file for assignment 7.2 - Calculator App
;================================================
*/

//Multiplication function and errors
function multiply(input1, input2){
    if (typeof input1 !== 'number' || typeof input2 !== 'number') {
        throw Error('Error: inputs must be numbers');
      }

    if (isNaN(input1) || isNaN(input2)) {
        throw Error('Error: Inputs must be numbers');
      }

      return input1 * input2;
}

//Function to display multiplication results
function displayMultiplyResults(){
    //Retrieve values from HTML 
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    //parseFloat to change string values to numbers
    input1 = parseFloat(input1);
    input2 = parseFloat(input2);

    try{
        const resultString = `${input1} * ${input2} = ${multiply(input1, input2)}`;
        document.getElementById('mul-results').innerHTML = resultString;    
    } catch (error) {
        alert(error.message); 
    } 
}

//Division function and errors
function divide(num3, num4){
    if (typeof num3 !== 'number' || typeof num4 !== 'number') {
        throw Error('Error: Inputs must be numbers');
      }

    if (isNaN(num3) || isNaN(num4)) {
        throw Error('Error: Inputs must be numbers');
      }

    if (num3 == 0 || num4 == 0) {
        throw Error('Error: cannot divide by zero');
      }
    
    return num3 / num4;
}

//Function to display division results
function displayDivideResults(){
    //retrieve values from HTML
    let input3 = document.getElementById('input3').value;
    let input4 = document.getElementById('input4').value;

    //parseFloat to change string values to numbers
    input3 = parseFloat(input3);
    input4 = parseFloat(input4);

    try{
        const resultString = `${input3} / ${input4} = ${divide(input3, input4)}`;
        document.getElementById('div-results').innerHTML = resultString;
    } catch (error) {
        alert(error.message); 
    } 
}

