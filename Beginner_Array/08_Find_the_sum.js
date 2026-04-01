// Find the sum of all elements in an array.

let array = [4, 5, 3, 8, 2, 3]

//// Using for loop
let totalForLoop = 0;
for (let i = 0; i < array.length; i++) {
    totalForLoop = totalForLoop + array[i]
}
console.log(totalForLoop)


//// Using for...of loop
let totalForOfLoop = 0;
for (let num of array) {
    totalForOfLoop = totalForOfLoop + num
}
console.log(totalForOfLoop)


//// Using reduce method (most concise & functional)

let totalReduce = array.reduce((acc, cur) => { return acc + cur })
console.log(totalReduce)

//// Using while loop
let total = 0;
let index = 0;
while(index < array.length){
    total= total + array[index]
    index++
}
console.log(total);

//// Using forEach
let sum = 0;
array.forEach((element)=>{
    sum = sum + element;
})
console.log(sum)