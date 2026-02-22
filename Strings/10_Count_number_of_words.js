//// Count number of words in a string
////example: "What can I help with" ,Total words = 5

let str = "What can I help with"
let count = 0

for (let i = 0; i < str.length; i++) {
    if ((i === 0 && str[i] !== ' ') || 
        (str[i] !== ' ' && str[i - 1] === ' ')) {
        count++
    }
}

console.log("Total words:", count)





////Using split ,Handles Extra Spaces
// let str = "What   can   I help"
// let words = str.trim().split(/\s+/)
// console.log("Total words:", words.length)
