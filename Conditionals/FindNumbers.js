//// Find the largest of two numbers

// let prompt = require('prompt-sync')();
// let number1 = prompt("Enter a number 1 :")
// let number2 = prompt("Enter a number 2 :")

// if (isNaN(number1) || isNaN(number2)) {
//     console.log(`Not a Number`)
// } else if (number1>number2) {
//     console.log(`${number1} is Largest Number`)
//     console.log(`${number2} is Smallest Number`)
// } else if (number1<number2) {
//     console.log(`${number2} is Largest Number`)
//     console.log(`${number1} is Smallest Number`)
// } else if (number1===number2) {
//     console.log(`${number1},${number2} is Equal Number`)
// }

///or using Ternary Operator

// let prompt = require('prompt-sync')();
// let number1 = prompt("Enter a number 1 :")
// let number2 = prompt("Enter a number 2 :")

// if (isNaN(number1) || isNaN(number2)) {
//     console.log(`Not a Number`)
// }else if (number1===number2) {
//     console.log(`${number1},${number2} is Equal Number`)
// }else{
//     let largest = number1>number2 ? number1 : number2;
//     let smallest = number1<number2 ? number1 : number2;
//     console.log("Largest:", largest);
//     console.log("Smallest:", smallest);
// }


//// Find the largest of three numbers.
// let prompt = require('prompt-sync')();
// let number1 = prompt("Enter a number 1 :")
// let number2 = prompt("Enter a number 2 :")
// let number3 = prompt("Enter a number 3 :")

// if (isNaN(number1) || isNaN(number2)) {
//     console.log(`Not a Number`)
// }else if (number1===number2 && number2===number3) {
//     console.log(`${number1},${number2},${number3} is Equal Number`)
// }else if(number1>number2 && number1>number3){
//     console.log(`${number1} is Largest Number`)
// }else if(number2>number1 && number2>number3){
//     console.log(`${number2} is Largest Number`)
// }else if(number3>number1 && number3>number2){
//     console.log(`${number3} is Largest Number`)
// }


////Find the second largest of three numbers.

// let prompt = require('prompt-sync')();

// let number01 = Number(prompt("Enter number1: "));
// let number02 = Number(prompt("Enter number2: "));
// let number03 = Number(prompt("Enter number3: "));
// let arr = []
// arr.push(number01,number02,number03)
// arr.sort((a,b)=>a-b)
// console.log(arr[1])

////or 
let prompt = require('prompt-sync')();

let number1 = Number(prompt("Enter number1: "));
let number2 = Number(prompt("Enter number2: "));
let number3 = Number(prompt("Enter number3: "));

let largest, secondLargest;

if (number1 > number2 && number1 > number3) {
    largest = number1;
    secondLargest = number2 > number3 ? number2 : number3;
} else if (number2 > number1 && number2 > number3) {
    largest = number2;
    secondLargest = number1 > number3 ? number1 : number3;
} else {
    largest = number3;
    secondLargest = number1 > number2 ? number1 : number2;
}
console.log(`Second largest number is: ${secondLargest}`);


