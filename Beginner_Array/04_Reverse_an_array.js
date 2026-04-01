////Reverse an array without using extra space.

////using unshift (store value in start in an array)
let arr = [23,54,12,18,39]
let arrNew = []
for(let i=0;i<=arr.length-1;i++){
arrNew.unshift(arr[i])
}
console.log(arrNew)


////using push (store value in end in an array)
let arra = [23,54,12,18,39]
let arr2 = []
for (let i = arra.length - 1; i >= 0; i--) {
    arr2.push(arra[i])
}
console.log(arr2)


////using reverse() method
let array = [23,54,12,18,39]
console.log(array.reverse())


////using logic
let arr1 = [23,54,12,18,39]
let arrNew1 = []
for(let i=arr1.length-1;i>=0;i--){
    arrNew1[arr1.length-1 - i] = arr1[i] // arrNew1[4-4 = 0] = arr1[4] next arrNew1[4-3 = 1]= arr1[3]
}
console.log(arrNew1)







//// easy way 
//// Reverse an array
const arrayNew = [1, 2, 3, 4, 5, 6]

////Using reverse() Method (Built-in)
const reverseArray = arrayNew.reverse()
console.log(reverseArray)


////Using a for loop (Creating a new array)
const reverseNewArray = []
for (let i = 0; i < arrayNew.length; i++) {
    reverseNewArray.unshift(arrayNew[i])
}
console.log(reverseNewArray)
// ---------------- 
let reversedArray = []
for (let i = 0; i < arrayNew.length; i++) {
    reversedArray[i] = arrayNew[arrayNew.length - 1 - i]
}
console.log(reversedArray)


////Swapping elements in-place (Two-pointer approach)
const ArrNew = [1, 2, 3, 4, 5, 6]
let left = 0;
let right = ArrNew.length - 1
while (left < right) {
    let temp = ArrNew[left]
    ArrNew[left] = ArrNew[right]
    ArrNew[right] = temp;

    left++
    right--
}
console.log(ArrNew)


////Using reduce() (Functional approach)
const reverseReduce = arrayNew.reduce((acc, cur) => [cur, ...acc], [])
console.log(reverseReduce)