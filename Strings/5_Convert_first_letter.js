//// Convert first letter of each word to uppercase

let str = 'it can also iterate over inherited properties'
let arr = str.split(' ')
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
}
let result = arr.join(' ')
console.log(result)



////using map()

let str1 = 'it can also iterate over inherited properties';
let result1 = str1
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
console.log(result1);