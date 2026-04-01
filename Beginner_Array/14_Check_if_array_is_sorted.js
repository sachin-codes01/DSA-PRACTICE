////Check if an array is sorted in ascending order.

////Using a simple loop
let array = [1, 2, 3, 4, 5, 6]
// let array = [6, 5, 4, 3, 2, 1]
let ascending = true;
let descending = true;
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
        ascending = false;
    }
    if (array[i] < array[i + 1]) {
        descending = false;
    }
}
if (ascending) {
    console.log("Array is sorted in ascending order");
} else if (descending) {
    console.log("Array is sorted in descending order");
} else {
    console.log("Array is not sorted");
}


////Using the every() method
////every() returns true if every element passes the test.

let arr1 = [1, 2, 3, 4, 5, 6]
const ascendingOrder = arr1.every((item, index) => index === 0 || arr1[index - 1] <= item)
console.log(ascendingOrder)

let arr2 = [6, 5, 4, 3, 2, 1]
const descendingOrder = arr2.every((item, index) => index === 0 || arr2[index - 1] >= item)
console.log(descendingOrder)