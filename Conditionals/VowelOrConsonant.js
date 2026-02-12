////Check whether a character is a vowel or consonant.
////Using Regex test()
// let prompt = require('prompt-sync')();
// let character = prompt("Enter character :")

// if (typeof(character) !== 'string') {
//     console.log(`Not a String`)
// } else if (/[aeiouAEIOU]/.test(character)) {
//     console.log(`${character} is a Vowel`)
// } else {
//     console.log(`${character} is not a Consonant`)
// }

//// or Using includes()
// let prompt = require('prompt-sync')();
// let character = prompt("Enter character :")

// if (typeof(character) !== 'string') {
//     console.log(`Not a String`)
// } else if ('aeiouAEIOU'.includes(character)) {
//     console.log(`${character} is a Vowel`)
// } else {
//     console.log(`${character} is not a Consonant`)
// }

//// or Using switch Statement
let prompt = require('prompt-sync')();
let character = prompt("Enter character :")
if (character.length !== 1) {
    console.log("Please enter a single character.");
}else{
switch(character.toLowerCase()){
    case 'a' :
    case 'e' :
    case 'i' :
    case 'o' :
    case 'u' : 
    console.log(`${character} is a Vowel`); break;
    default : console.log(`${character} is a Consonant`)
}
}
//// or Using Array + includes()
// let prompt = require('prompt-sync')();
// let character = prompt("Enter character :")

// let vowel = ['a','e','i','o','u']
// let isVowel = false;
// if (character.length !== 1) {
//     console.log("Please enter a single character.");
// }else{
// for(let i=0;i<=vowel.length-1;i++){
//     if(character.toLowerCase() === vowel[i]){
//         isVowel = true;
//         break
//     }
// }
// if(isVowel){
//         console.log(`${character} is Vowel`)
//     }else{
//         console.log(`${character} is Consonant`)
//     }
// }

////or 

// let prompt = require('prompt-sync')();
// let character = prompt("Enter character :")

// let vowel = ['a','e','i','o','u']

// if (character.length !== 1) {
//     console.log("Please enter a single character.");
// }else{
//     if(vowel.includes(character.toLowerCase())){
//         console.log(`${character} is Vowel`)
//     }else{
//         console.log(`${character} is Consonant`)
//     }
// }

//// or Using ASCII Values
// let prompt = require('prompt-sync')();
// let character = prompt("Enter character :")
// let code = character.charCodeAt();

// if(code === 65 || code === 69 || code === 73 || code === 79 || code === 85 ||
//     code === 97 || code === 101 || code === 105 || code === 111 || code === 117) {
//     console.log(`${character} is a Vowel`)
// } else {
//     console.log(`${character} is not a Consonant`)
// }
