//// 6. Find the first non-repeating character in a string.

let string = "programming"
let count = {}
for (let i = 0; i < string.length; i++) {
    if (count[string[i]]) {
        count[string[i]]++
    } else {
        count[string[i]] = 1
    }
}
for (let i = 0; i < string.length; i++) {
    if (count[string[i]] === 1) {
        console.log("First non-repeating character is:", string[i])
        break
    }
}