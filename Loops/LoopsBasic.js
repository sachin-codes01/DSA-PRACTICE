////Print multiplication table of a number.

const prompt = require("prompt-sync")();
// let n = prompt('Table of : ')
// for(let i=1;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i}`)
// }



////Find sum of first N natural numbers.

// let N = prompt('Then the Number: ');
// let sumOfN = 0;
// for(let i=1;i<=N;i++){
//     sumOfN = sumOfN + i
// }
// console.log(sumOfN)



////Find factorial of a number.

// let Nu = prompt('Then the Number: ');
// let sumOfNu = 1;
// for(let i=1;i<=Nu;i++){
//     sumOfNu = sumOfNu * i
// }
// console.log(sumOfNu)



////Count digits in a number.

// let Num = 3458;
// let Count = Num.toString().split('');
// console.log(Count.length)

////or using withot Methods

// let nu = 8463;
// let counte= (nu + '').length
// console.log(counte)

////or 
// let numC = 3765768;
// let C = 0;
// while (numC > 0) {
//     C++;
//     numC = Math.floor(numC/10)
// }
// console.log(C)

////or 

// let numC = 3765768;
// let C = 0;
// for(;numC>0;){
//     C++;
//     let numC = Math.floor(numC/10)
// }
// console.log(C)

////or

// let numC = 1234567890;
// let C = 0;
// for(;numC>0;){
//     C++;
//     let lastDigit = numC%10;
//     numC = (numC-lastDigit)/10
// }
// console.log(C)



////Reverse a number.

// let numC = 1234;
// let C = 0;
// while(numC>0){   
//     let lastDigit = numC%10; // 4       ,3
//     C = C*10+lastDigit;      // 0*10+4 = 4    , 4*10+3 = 40+3 = 43
//     numC = (numC-lastDigit)/10 // 1234-4 = 1230/10 = 123 ,  123-3 = 120/10 = 12
// } 
// console.log(C)



////Check if a number is palindrome.

// let num = 1221;
// let original = num;
// let d = 0;
// while(num>0){
//     let last = num%10;
//     d = d*10+last;
//     num = (num-last)/10
// }
// if(original === d){
// console.log(`${original} number is palindrome`)
// }else{
// console.log(`${original} number is not palindrome`)
// }



////Check if a number is prime.

// let numb = 0;
// let isTru = true;
// if (numb <= 1) {
//     isTru = false;
// }
// for (let i = 2; i < numb; i++) {
//     if (numb % i === 0) {
//         isTru = false;
//         break;
//     }
// }
// if (isTru) {
//     console.log(`${numb} is a Prime Number`)
// } else {
//     console.log(`${numb} is not a Prime Number`)
// }



////Print Fibonacci series up to N terms.
////Find largest digit in a number.
////Find sum of digits of a number.
////Check Armstrong number.
////Print all divisors of a number.
////Count number of even and odd digits in a number.
////Print numbers divisible by 3 and 5 between 1–100.
////Calculate power (a^b) using loop.
////Find GCD of two numbers using loop.
////Print all prime numbers between 1–100.
////Print multiplication table from 1–10.
////Find all Armstrong numbers between 1–1000.
////Matrix addition using loops.
////Matrix multiplication using loops.