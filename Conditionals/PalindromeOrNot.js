////Check whether a number is a Palindrome

// let prompt = require('prompt-sync')();
// let name = prompt("Enter name: ");
// let name2 = name.split('').reverse().join('')
// if(name === name2){
//     console.log(`${name} is a Palendrome`)
// }else{
//     console.log(`${name} is not a Palendrome`)
// }

////or without Methods

let prompt = require('prompt-sync')();
let name = prompt("Enter name: ");
let name2 = ''
for(let i=name.length-1;i>=0;i--){
    name2 += name[i]
}
console.log(name2)
if(name === name2){
    console.log(`${name} is a Palendrome`)
}else{
    console.log(`${name} is not a Palendrome`)
}

