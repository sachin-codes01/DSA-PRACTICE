////Check whether a number is an Armstrong number
////An Armstrong number is a number whose sum of the nth power of its digits is equal to the number itself.
////if 3 digits
// let prompt = require('prompt-sync')();
// let number = prompt("Enter name: ");
// let number2 = ''
// for(let i=0;i<=number.length-1;i++){
//     number2 = number[0]**3 +number[1]**3 +number[2]**3 
// }
// console.log(number2)
// if(number == number2){
//     console.log(`${number} is a Armstrong number`)
// }else{
//     console.log(`${number} is not a Armstrong number`)
// }

////or using methods

let prompt = require('prompt-sync')();
let number = Number(prompt("Enter number: "));
let number2 = 0;
let newNum = number;
let numDigits = number.toString().length;
for(let i=0;i<numDigits;i++){
    number2 += (newNum%10)**numDigits
    newNum = Math.floor(newNum/10)
}
if(number == number2){
    console.log(`${number} is a Armstrong number`)
}else{
    console.log(`${number} is not a Armstrong number`)
}

////or without using methods

// let prompt = require('prompt-sync')();
// let number = Number(prompt("Enter number: "));
// let number2 = 0;

// let numDigits = 0;
// for (let temp = number; temp > 0; temp = (temp - (temp % 10)) / 10) {
//     numDigits++;
// }

// for (let temp = number; temp > 0; temp = (temp - (temp % 10)) / 10) {
//     let digit = temp % 10;
//     let power = 1;
//     for (let i = 0; i < numDigits; i++) {
//         power *= digit;
//     }
//     number2 += power;
// }

// if (number === number2) {
//     console.log(`${number} is an Armstrong number`);
// } else {
//     console.log(`${number} is not an Armstrong number`);
// }
