/*
=================================================
;  Title: Keith-temp-conversion.js
;  Author: Alexander Keith
;  Date: 4/2/2023
;  Description: Keith-temp-conversion.js file for assignment Exercise 3.3 - Temperature Conversion App
;================================================
*/

// function converts fahrenheit to celsius
function calcCelsius() {
const fahrenheit = document.getElementById("temperature").value;
const celsius = (fahrenheit - 32) / 1.8;

// Displays results
document.getElementById("calculate").innerHTML = celsius.toFixed(2);
}