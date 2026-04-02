//// Find missing number in array
//// after sorting and after that apply Brute Force
let array = [1, 5, 6, 3, 7, 8]
const sortedArray = array.sort((a, b) => a - b)
let missing = []
for (let i = 0; i < sortedArray.length - 1; i++) {
    let current = sortedArray[i]
    let next = sortedArray[i + 1]

    for (let j = current + 1; j < next; j++) {
        missing.push(j);
    }
}
console.log(missing)


//// No Sorting and and not Brute Force, Interview Ready
let array1 = [1, 5, 6, 3, 7, 8];

let set = new Set(array1);
let min = Math.min(...array1);
let max = Math.max(...array1);
let missing1 = [];

for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
        missing1.push(i);
    }
}
console.log(missing1);