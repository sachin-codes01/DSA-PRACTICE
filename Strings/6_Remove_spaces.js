//// Remove spaces from a string


////using methods
////Remove all spaces
let str = 'Whats on your mind today'
let arr = str.split(' ').join('')
console.log(arr)


////Remove only leading and trailing spaces (from the startand end)
let str1 = '            Whats on your mind today    '
let arr1 = str1.trim()
console.log(arr1)


////Remove only extra spaces between words
let str3 = 'Whats on         your mind                 today'
let arr3 = str3.replace(/\s+/g, " ");
console.log(arr3)




////or using logic
////Remove all spaces using loop
let string = 'want to remove spaces from a string';
let newStr = ''

for(let i=0;i<string.length;i++){
    if(string[i] !== " "){
        newStr += string[i]
    }
}
console.log(newStr)


////Remove only leading and trailing spaces (from the startand end)
let string1 = '          want to remove spaces from a string     ';
let start = 0
let end = string1.length-1
let newStr1 = ''
for(let i=0;i<string1.length;i++){
    if(string1[i] !== " "){
        start = i
        break
    }
}
for(let i=string1.length-1;i>=0;i--){
    if(string1[i] !== " "){
        end = i
        break
    }
}
for(let i=start;i<=end;i++){
    newStr1 += string1[i]
}
console.log(newStr1)


////Remove only extra spaces between words
let strings = "Hello    World   From   JS"
let result = ""
let spaceCount = 0
for(let i = 0; i < str.length; i++){
    if(strings[i] === " "){
        spaceCount++
    }else{
        spaceCount = 0
    }

    if(spaceCount<=1){
        result += strings[i]
    }
}
console.log(result)
