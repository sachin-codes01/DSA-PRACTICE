//// Find length of string without using .length

////using for...of or for...in
let str = 'sachin'
let length = 0
for(let index in str){
    length++
}
console.log(length)



//// Using While Loop
let string = 'sachin'
let len = 0
while(string[len]!== undefined){
    len++
}
console.log(len)



////Using split() + Counter
let stri = 'sachin'
let arr = stri.split('');
let count = 0;

for (let _ of arr) {
    count++;
}

console.log(count);
