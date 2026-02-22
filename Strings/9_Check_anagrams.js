//// Check if two strings are anagrams
//// Example of Anagrams
//// "listen" and "silent" ✔
//// "triangle" and "integral" ✔
//// "rat" and "car" ❌ (different letters)


//// using logic

let str1 = 'listen'
let str2 = 'silent'
if (str1.length !== str2.length) {
    console.log("Not Anagram")
} else {

    let count = {}

    for (let i = 0; i < str1.length; i++) {
        if (count[str1[i]]) {
            count[str1[i]]++
        } else {
            count[str1[i]] = 1
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!count[str2[i]]) {
            console.log("Not Anagram")
            return
        }
        count[str2[i]]--
    }

    console.log('Anagram')

}





//// using methods

let string1 = "listen"
let string2 = "silent"

let sorted1 = string1.split('').sort().join('')
let sorted2 = string2.split('').sort().join('')

if(sorted1 === sorted2){
    console.log("Anagram")
} else {
    console.log("Not Anagram")
}