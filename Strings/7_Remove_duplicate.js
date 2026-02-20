//// Remove duplicate characters from string
////using methods
let str1 = "programming";
let result1 = "";

for (let i = 0; i < str1.length; i++) {
    if (!result1.includes(str1[i])) {
        result1 += str1[i];
    }
}
console.log(result1);


////using logic
let str = "banana";
let result = "";

for (let i = 0; i < str.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
        if (str[i] === result[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result += str[i];
    }
}

console.log(result);