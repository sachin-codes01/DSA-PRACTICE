////Count the frequency of each element in the array.
//// Array: [2, 3, 2, 5, 3, 2]
//// 2 appears 3 times
//// 3 appears 2 times
//// 5 appears 1 time

let arr = [2, 3, 2, 5, 3, 2]
let count = {}
for(let i=0;i<arr.length;i++){
    if(count[arr[i]]){
        count[arr[i]]++
    }else{
        count[arr[i]] = 1
    }
}

for(let key in count){
    console.log(key ,'appears', count[key],'times')
}



////Count Frequency Using map()
let arr1 = [2, 3, 2, 5, 3, 2];
let count1 = {};

arr1.map(num => count1[num] = (count1[num] || 0) + 1);

for (let num in count1) {
    console.log(num, 'appears', count1[num], 'times');
}
