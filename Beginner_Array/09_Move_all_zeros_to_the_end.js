////Move all zeros to the end of the array.

let arr = [0,56,23,0,77,32,0,68,43];
let newArr = []
let newArr0 = []
for(let i=0;i<arr.length;i++){
    if(arr[i] !== 0){
        newArr.push(arr[i])
    }
    if(arr[i] === 0){
        newArr0.push(arr[i])
    }
}
let myArr = newArr.concat(newArr0)
console.log(myArr)

////or
////swap logic is like a=3,b=2 ,then temp = a ,now asume a is empty then a = b 
//// ,now asume b is empty b = temp ,now a=2,b=3

let arr1 = [0,56,23,0,77,32,0,68,43];
let position = 0
for(let i=0;i<arr1.length;i++){
    if(arr1[i] !== 0){
        let temp = arr1[i]
        arr1[i] = arr1[position]
        arr1[position] = temp

        position++
    }
}
console.log(arr1)


////Using Filter Concept (Functional Thinking)

let array = [0,56,23,0,77,32,0,68,43];
let nonZero = array.filter(e=>e!==0)
let zeros = array.filter(e=>e===0)
let newArary = nonZero.concat(zeros)
console.log(newArary)
