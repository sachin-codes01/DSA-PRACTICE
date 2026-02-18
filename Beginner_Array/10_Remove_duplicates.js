////Remove duplicates from a sorted array.
let array = [1, 1, 2, 2, 3, 4, 4]
let newArray = []
newArray.push(array[0])
for(let i=1;i<array.length;i++){
    if(array[i] !== array[i-1]){
        newArray.push(array[i])
    }
}
console.log(newArray)



////Using Set
////Set automatically removes duplicates.
//// Spread operator converts it back to array.
let array1 = [1, 1, 2, 2, 3, 4, 4];
let unique = [...new Set(array1)];
console.log(unique);



////In-Place Method (logical) (Best for Interviews)
let arr = [1, 1, 2, 2, 3, 4, 4];
let j = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
        j++;
        arr[j] = arr[i];
    }
}
console.log(arr.slice(0, j + 1));






