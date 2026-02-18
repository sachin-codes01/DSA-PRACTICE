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