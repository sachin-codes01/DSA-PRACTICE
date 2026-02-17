////Find the second largest element in the array.
//// using compare

let arr_sec = [35,49,53,12,43];
let max_1st = arr_sec[0];
let max_2nd = arr_sec[0];
for(let i=0;i<arr_sec.length;i++){
    if(max_1st<arr_sec[i]){
        max_2nd=max_1st  
        max_1st=arr_sec[i]
    }
    if(max_2nd<arr_sec[i] && arr_sec[i]<max_1st){
        max_2nd=arr_sec[i]
    }
}
console.log(max_1st)
console.log(max_2nd)

//Find the Third largest element in the array.
// let arr_sec = [35,49,53,12,43];
// let max_1st = arr_sec[0];
// let max_2nd = arr_sec[0];
let max_3rd = arr_sec[0];
for(let i=0;i<arr_sec.length;i++){
    if(max_1st<arr_sec[i]){
        max_3rd=max_2nd  
        max_2nd=max_1st  
        max_1st=arr_sec[i]
    }
    if(max_2nd<arr_sec[i] && arr_sec[i]<max_1st){
        max_3rd=max_2nd  
        max_2nd=arr_sec[i]
    }
    if(max_3rd<arr_sec[i] && arr_sec[i]<max_2nd){
        max_3rd=arr_sec[i]
    }
}
console.log(max_3rd)

////using sorting
let arr = [12,200,400,54,56,67]
    arr.sort((a,b) => b-a)
    let Max_2nd = arr[1]
console.log(Max_2nd)

