//// Check if a string is palindrome
////If you reverse it and it stays the same → it’s a palindrome.


////using Reverse and Compare
let str = 'racecar';
let reverseStr = ''
for(let i=str.length-1;i>=0;i--){
    reverseStr+=str[i]
}
console.log(reverseStr)
if(str===reverseStr){
    console.log(str,'is a palindrome')
}else{
    console.log(str,'is not a palindrome')
}


////using two pointers
let string = 'racecar';
let left = 0;
let right = string.length-1;
let notPal = true;
while(left<=right){
   if(string[left]!==string[right]){
    notPal = false;
    break
   }
   left++
   right--
}
if(notPal){
    console.log(string,'is a palindrome')
}else{
    console.log(string,'is not a palindrome')
}