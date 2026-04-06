
////  Agar string hai "hello" to traversal ka matlab hai: h → e → l → l → o 
// (ek-ek character pe jaana)

//// 1. How do you traverse a string in JavaScript?

let str = "JavaScript";
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

let s = "JavaScript";
for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i])
}