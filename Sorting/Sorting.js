
//// Implement Bubble Sort (ascending order)

//// We compare two adjacent elements,If they are in the wrong order, we swap them
//// We keep repeating this process
//// After every round, the largest element “bubbles up” to the end

let arr = [32,45,23,67,2,65,8]
for(i=0;i<arr.length;i++){
for(j=0;j<arr.length-i;j++){
    if(arr[j+1]<arr[j]){
    let temp = arr[j]
    arr[j] = arr[j+1]
    arr[j+1] = temp
    }
}
}
console.log(arr)


//// Implement Bubble Sort (descending order)

let arr1 = [32,45,23,67,2,65,8]
for(i=0;i<arr1.length;i++){
for(j=0;j<arr1.length-i;j++){
    if(arr1[j] < arr1[j+1]){
    let temp = arr1[j]
    arr1[j] = arr1[j+1]
    arr1[j+1] = temp
    }
}
}
console.log(arr1)




//// Implement Selection Sort
/// Find the smallest element from the unsorted part
/// Swap it with the first element of the unsorted part,Repeat until the array is sorted.

let arr2 = [32,45,23,67,2,65,8]
for(i=0;i<arr2.length;i++){
    let minIndex = i
    for(j=i;j<arr2.length;j++){ 
    if(arr2[j] < arr2[minIndex]){  //first it run when the condition is 2 < 32 
    minIndex = j
    }
}
const temp = arr2[minIndex]
arr2[minIndex] = arr2[i]
arr2[i] = temp
}
console.log(arr2)




////Implement Insertion Sort
////You take one element,Compare it with elements before it
////Insert it at the correct position,Shift others to the right

let arr3 = [32,45,23,67,2,65,8]
for(i=0;i<arr3.length;i++){
for(j=i;j>0;j--){
    if(arr3[j-1]>arr3[j]){
    let temp = arr3[j]
    arr3[j] = arr3[j-1]
    arr3[j-1] = temp
    }
}
} 
console.log(arr3)







