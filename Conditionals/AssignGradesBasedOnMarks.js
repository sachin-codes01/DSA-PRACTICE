//// Write a program to assign grades based on marks:
//// 90+ → A
//// 75–89 → B
//// 50–74 → C
//// Below 50 → Fail

// let prompt = require('prompt-sync')();
// let marks = prompt("Enter marks :")

// switch(true){
//     case (marks>=90) : console.log(`Marks: ${marks}, Your Grades is A`); break;
//     case (marks>=75 && marks<90) : console.log(`Marks: ${marks}, Your Grades is B`); break;
//     case (marks>=50 && marks<75) : console.log(`Marks: ${marks}, Your Grades is C`); break;
//     default: console.log(`Marks: ${marks}, You are Fail`)
// }

////or using Ternary Operator
let prompt = require('prompt-sync')();
let marks = prompt("Enter marks :")
let grade = marks>=90 ? 'A' : marks>=75 ?'B' :marks >= 50 ? 'C' :'Fail';
console.log(`Marks: ${marks}, Your Grade is ${grade}`);