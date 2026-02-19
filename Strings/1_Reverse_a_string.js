//// Reverse a string

let str = 'sachin'
let reverseStr = ''
for(let i=str.length-1;i>=0;i--){
    reverseStr+=str[i]
}
console.log(reverseStr)

//// using swaping (with methods)
function reverse(str){
    let arr = str.split('')
    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--
    }
    return arr.join('');
}
console.log(reverse("sachin"))