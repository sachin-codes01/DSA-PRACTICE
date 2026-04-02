////Left shift and right shift array elements.

//// Left rotate array by 1 place

////Shift All Elements Left (Brute Force Thinking)
const array = [4, 4, 5, 6, 7, 8, 9]
let firstElement = array[0]
for (let i = 1; i < array.length; i++) {
    array[i] = array[i + 1];
}
array[array.length - 1] = firstElement;
console.log(array)


////Using Extra Space (Auxiliary Array)
const result = array.slice(1)
result.push(array[0])
console.log(result)

let newArray = []
let first = array[0]
for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i + 1]
}
newArray.push(first)
console.log(newArray)


////Using Built-in Operations (Abstract Thinking)
let arry = [0, 0, 2, 4, 6, 8]
let firsts = arry[0]
arry.shift(arry[0])
arry.push(firsts)
console.log(arry)


//// Left rotate array by k places
//// Using Reversal Technique (Conceptual Extension)
let arr = [4, 5, 6, 7, 8];
let k = 2;

let start = 0;
let end = k - 1

while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}

start = k;
end = arr.length - 1;
while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}

start = 0;
end = arr.length - 1;
while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr)