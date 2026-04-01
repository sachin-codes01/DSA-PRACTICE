////Find the maximum and minimum element in an array.
////maximum
let arr_max = [63,54,237,32,56];
let max = arr_max[0];
for(let i=0;i<=arr_max.length;i++){
    if(max<arr_max[i]){
        max = arr_max[i]
    }
}
console.log("max: ", max)

////minimum
let arr_min = [63,54,237,32,56];
let min= arr_min[0];
for(let i=0;i<=arr_min.length;i++){
    if(min>arr_min[i]){
        min = arr_min[i]
    }
}
console.log("min: ", min)


////using Methods ////sort() changes the original array

let arr_m = [63,54,237,32,56];
arr_m.sort((a,b)=>a-b)
let max_m = arr_m[arr_m.length-1]
let min_m = arr_m[0]
console.log("max: ", max_m)
console.log("min: ", min_m)


////using Math
let arr_ = [12,20,400,54,56,67]
let max_ = Math.max(...arr_)
let min_ = Math.min(...arr_)
console.log(max_)
console.log(min_)










// Find largest element in array (easy ways)

const array = [3, 5, 2, 8, 3, 6, 3, 0, 3, 7]

//// Using Math.max
const  largestMath  = Math.max(...array)
console.log(largestMath)

const  smallestMath  = Math.min(...array)
console.log(smallestMath)



////Using reduce
const largestReduce = array.reduce((answer, arrayValues) => { return arrayValues > answer ? arrayValues : answer }, array[0])
console.log(largestReduce)

const smallestReduce = array.reduce((answer, arrayValues) => { return arrayValues < answer ? arrayValues : answer }, array[0])
console.log(smallestReduce)



////Using a for loop
let largestElement = array[0]
for (let i = 1; i < array.length; i++) {
    if (array[i] > largestElement) {
        largestElement = array[i]
    }
}
console.log(largestElement)

let smallestElement = array[0]
for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
        smallestElement = array[i]
    }
}
console.log(smallestElement)



////Using sort
let largestSort = (array.sort((a,b)=>b-a))[0]
console.log(largestSort)

let smallestSort = (array.sort((a,b)=>a-b))[0]
console.log(smallestSort)