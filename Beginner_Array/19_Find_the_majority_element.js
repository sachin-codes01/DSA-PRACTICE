//// Find majority element (more than ,size of array/2 times)

////Brute Force
let array = [3, 2, 3]
for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            count++
        }
    }
    if (count > array.length / 2) {
        console.log(array[i])
        break;
    }
}

//// Boyer-Moore Voting Algorithm (Best Approach (Interview Favorite))
let arr = [3, 2, 3]

let candidate = null
let count = 0

for (let num of arr) {
    if (count === 0) {
        candidate = num
    }

    if (num === candidate) {
        count++
    } else {
        count--
    }
}
console.log(candidate)