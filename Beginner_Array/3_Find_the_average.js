////Find the average of array elements. ////Add all numbers → Divide by tot

let arr = [34,65,54,23,34];
let sunOfElements = 0
for(let i=0;i<arr.length;i++){
    sunOfElements+=arr[i]
}
let average = sunOfElements/arr.length;
console.log(average)
