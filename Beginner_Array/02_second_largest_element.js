////Find the second largest element in the array.
//// using compare

let arr_sec = [35,49,53,12,43];
let max_1st = arr_sec[0];
let max_2nd = arr_sec[0];
for(let i=0;i<arr_sec.length;i++){
    if(max_1st<arr_sec[i]){
        max_2nd=max_1st  
        max_1st=arr_sec[i]
    }
    if(max_2nd<arr_sec[i] && arr_sec[i]<max_1st){
        max_2nd=arr_sec[i]
    }
}
console.log(max_1st)
console.log(max_2nd)

//Find the Third largest element in the array.
// let arr_sec = [35,49,53,12,43];
// let max_1st = arr_sec[0];
// let max_2nd = arr_sec[0];
let max_3rd = arr_sec[0];
for(let i=0;i<arr_sec.length;i++){
    if(max_1st<arr_sec[i]){
        max_3rd=max_2nd  
        max_2nd=max_1st  
        max_1st=arr_sec[i]
    }
    if(max_2nd<arr_sec[i] && arr_sec[i]<max_1st){
        max_3rd=max_2nd  
        max_2nd=arr_sec[i]
    }
    if(max_3rd<arr_sec[i] && arr_sec[i]<max_2nd){
        max_3rd=arr_sec[i]
    }
}
console.log(max_3rd)

////using sorting
let arr = [12,200,400,54,56,67]
    arr.sort((a,b) => b-a)
    let Max_2nd = arr[1]
console.log(Max_2nd)















//// easy ways 
// Find second largest element

const array = [3, 2, 7, 8, 2, 7, 9, 3]

////Sort and Pick
const secondLargestSort = array.sort((a, b) => b - a)[1]
console.log(secondLargestSort)


////Find Max, Then Find Second Max
let maximum = 0;
let secondMaximum = 0;
for (let i = 0; i < array.length; i++) {
    if (maximum < array[i]) {
        maximum = array[i]
    }
}
for (let i = 0; i < array.length; i++) {
    if (secondMaximum < array[i] && maximum > array[i]) {
        secondMaximum = array[i]
    }
}
console.log(secondMaximum)

////Using Set to Remove Duplicates Then Sort
const setArray = [...new Set(array)].sort((a, b) => b - a)[1]
console.log(setArray)

////Using forEach()
let largest = -Infinity;
let secondLargest = -Infinity;
array.forEach(num => {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
});
console.log(secondLargest); 