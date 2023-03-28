/*
=================================================
;  Title: Keith-payroll.js
;  Author: Alexander Keith
;  Date: 3/26/2023
;  Description: Payroll JavaScript file for assignment 2.2 - Values and Variables
;================================================
*/

//Assigns variables for first names
const oneOne = "Ludwig"
const twoOne = "Johann"
const threeOne = "Wolfgang"

//Assigns variables for last names
const oneTwo = "Beethoven"
const twoTwo = "Bach"
const threeTwo = "Mozart"

//Assigns Variables for addresses
const oneThree = "505 main street"
const twoThree = "512 main street"
const threeThree = "600 main street"

//Assigns Variables for dates
const oneFour = new Date().toLocaleDateString('en-US');
const twoFour = new Date().toLocaleDateString('en-US');
const threeFour = new Date().toLocaleDateString('en-US');

//Assigns Variables for pay rates
const oneFive = 18.9.toFixed(1);
const twoFive = 25.5.toFixed(1);
const threeFive = 50.1.toFixed(1);


//Assigns list item values by name
document.getElementById("one-One").innerHTML = oneOne;
document.getElementById("one-Two").innerHTML = oneTwo;
document.getElementById("one-Three").innerHTML = oneThree;
document.getElementById("one-Four").innerHTML = oneFour;
document.getElementById("one-Five").innerHTML = oneFive;
document.getElementById("two-One").innerHTML = twoOne;
document.getElementById("two-Two").innerHTML = twoTwo;
document.getElementById("two-Three").innerHTML = twoThree;
document.getElementById("two-Four").innerHTML = twoFour;
document.getElementById("two-Five").innerHTML = twoFive;
document.getElementById("three-One").innerHTML = threeOne;
document.getElementById("three-Two").innerHTML = threeTwo;
document.getElementById("three-Three").innerHTML = threeThree;
document.getElementById("three-Four").innerHTML = threeFour;
document.getElementById("three-Five").innerHTML = threeFive;
