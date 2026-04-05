////Find the pair of elements whose sum is equal to X.

//// Two Sum (Find two numbers in the array whose sum equals the target)

let array = [2, 7, 0, 4, 15]
let target = 11;
let result = []
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            result[0] = (array[i])
            result[1] = (array[j])
            break;
        }
    }
}
console.log(result)


let arr = [2, 7, 11, 4, 15]
let Target = 11
let Seen = {}
let Result = []
for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    let needed = Target - current

    if (Seen[needed]) {
        Result.push(needed)
        Result.push(current)
        break
    }

    Seen[current] = true
}

console.log(Result)