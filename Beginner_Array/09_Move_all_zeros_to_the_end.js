////Move all zeros to the end of the array.

let arr = [0, 56, 23, 0, 77, 32, 0, 68, 43];
let newArr = []
let newArr0 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        newArr.push(arr[i])
    }
    if (arr[i] === 0) {
        newArr0.push(arr[i])
    }
}
let myArr = newArr.concat(newArr0)
console.log(myArr)

////or
////swap logic is like a=3,b=2 ,then temp = a ,now asume a is empty then a = b 
//// ,now asume b is empty b = temp ,now a=2,b=3

let arr1 = [0, 56, 23, 0, 77, 32, 0, 68, 43];
let position = 0
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== 0) {
        let temp = arr1[i]
        arr1[i] = arr1[position]
        arr1[position] = temp

        position++
    }
}
console.log(arr1)


////Using Filter Concept (Functional Thinking)

let array1 = [0, 56, 23, 0, 77, 32, 0, 68, 43];
let nonZero1 = array1.filter(e => e !== 0)
let zeros1 = array1.filter(e => e === 0)
let newArary = nonZero1.concat(zeros1)
console.log(newArary)


















////easy way
//// Move all zeros to end

let array = [0, 1, 2, 3, 0, 4, 0, 5, 6]

////Using filter() (Most common & readable)
const nonZeros = array.filter((num) => num !== 0)
const zeros = array.filter((num) => num === 0)
console.log(nonZeros.concat(zeros))


//// Using forEach()
const NonZero = []
const Zero = []
array.forEach((num) => {
    if (num > 0) {
        NonZero.push(num)
    } else {
        Zero.push(num)
    }
})
console.log(NonZero.concat(Zero))


//// Loop + New Array
let noneZero = []
let zero = []
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        noneZero.push(array[i])
    } else {
        zero.push(array[i])
    }
}
console.log(noneZero.concat(zero))


////Using reduce() (Functional style)
let result = array.reduce((acc, cur) => {
    if (cur !== 0) {
        acc.nonZeros.push(cur)
    } else {
        acc.zeros.push(cur)
    }
    return acc
}, { nonZeros: [], zeros: [] })
let mixReduce = [...result.nonZeros, ...result.zeros]
console.log(mixReduce)


//// Using Two Pointers (When optimizing)
let j = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        j++
    }
}
console.log(array)