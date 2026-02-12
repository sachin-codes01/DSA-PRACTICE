////Write a program to check whether a number is positive, negative, or zero.

// let prompt = require('prompt-sync')();
// let number = prompt("Enter a number")

// if (isNaN(number)) {
//     console.log(`${number} is Not a Number it's a ${typeof(number)} `)
// } else if (number > 0) {
//     console.log(`${number} is Positive Number`)
// } else if (number < 0) {
//     console.log(`${number} is Negative Number`)
// } else if (number == 0) {
//     console.log(`${number} is Zero`)
// }

//// Check whether a number is even or odd.

// let prompt = require('prompt-sync')();
// let number = prompt("Enter a number")

// if (isNaN(number)) {
//     console.log(`${number} is Not a Number it's a ${typeof(number)} `)
// } else if (number%2===0) {
//     console.log(`${number} is Even Number`)
// } else{
//     console.log(`${number} is Odd Number`)
// }



//// Check whether a year is a leap year.   
//// A year is a leap year if it is divisible by 4 but not by 100, unless it is also divisible by 400.
// let prompt = require('prompt-sync')();
// let year = prompt("Enter a year :")

// if (isNaN(year)) {
//     console.log(`Not a Number`)
// } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year`)
// } else {
//     console.log(`${year} is not a leap year`)
// }



////Check whether a number is divisible by both 5 and 11.
// let prompt = require('prompt-sync')();
// let number = prompt("Enter number :")

// if(number%5===0 && number%11===0) {
//     console.log(`${number} is divisible by both 5 and 11`)
// } else {
//     console.log(`${number} is not divisible by both 5 and 11`)
// }

//// Check whether a number is a multiple of 3 or 7. अगर संख्या 3 या 7 से पूरा भाग जाए (बाकी 0 आए), तो वह 3 या 7 का multiple है।
// let prompt = require('prompt-sync')();
// let number = prompt("Enter number :")

// if(number%3===0 && number%7===0) {
//     console.log(`${number} is divisible by both 5 and 11`)
// } else {
//     console.log(`${number} is not divisible by both 5 and 11`)
// }



////Check whether a number is a 3-digit number.

////this way is not recomended in interview
// let prompt = require('prompt-sync')();
// let num = prompt("Enter number: ");

// if (num.length === 3) {
//     console.log("3-digit number");
// }

////or  using Math()
// let prompt = require('prompt-sync')();
// let num = prompt("Enter number: ");

// if (Math.abs(num)>99 && Math.abs(num)<1000) {
//     console.log(`${num} is 3-digit number`);
// }else{
//     console.log(`${num} is not a 3-digit number`);
// }



////Check whether a character is:Uppercase,Lowercase,Digit,Special character

// let prompt = require('prompt-sync')();
// let ch = prompt("Enter a character: ");
// let code = ch.charCodeAt(0);

// if (code >= 65 && code <= 90) {
//     console.log(`${ch} is an Uppercase letter`);
// } else if (code >= 97 && code <= 122) {
//     console.log(`${ch} is a Lowercase letter`);
// } else if (code >= 48 && code <= 57) {
//     console.log(`${ch} is a Digit`);
// } else {
//     console.log(`${ch} is a Special character`);
// }