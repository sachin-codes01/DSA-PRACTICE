////Check if a given element exists in the array.


////using Logic or Linear Search (Loop Method)
let arr = [34, 23, 12, 67, 54]
let search = 12;
let isSearch = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        isSearch = true;
        break
    }
}
if (isSearch) {
    console.log(search, ' exists in the array')
} else {
    console.log(search, ' not exists in the array')
}


//// using method (Using includes())

let arr1 = [34, 23, 12, 67, 54]
let search1 = 12;
let ser1 = arr1.includes(search1) //returns true or false
if (ser1) {
    console.log(search1, ' exists in the array')
} else {
    console.log(search1, ' not exists in the array')
}





//// using method (Using indexOf())
//it return index ,if value not exist then return -1
let arr2 = [34, 23, 12, 67, 54]
let search2 = 12;
let ser2=0;
for (let i = 0; i < arr2.length; i++) {
ser2 = arr2.indexOf(search2) 
}
if (ser2===-1) {
    console.log(search2, ' not exists in the array')
} else {
    console.log(search2, ' exists in the array')
}


//// using method ( indexOf())
////Returns the first element that satisfies a condition (callback function). undefined if not found
let arr3 = [34, 23, 12, 67, 54]
let search3 = 12;
let ser3=0;
for (let i = 0; i < arr3.length; i++) {
ser3 = arr3.find(e => e===search3) 
}
if (ser3) {
    console.log(search3, ' exists in the array')
} else {
    console.log(search3, ' not exists in the array')
}





//// using method (filter())
//Returns a new array with all elements that satisfy a condition.Does NOT change the original array
let arr4 = [34, 23, 12, 67, 54]
let search4 = 12;
let ser4=arr4.filter(e => e===search4)
let exist4 = ser4.length>0 ? `${ser4} exist` : `${search4} not exist`
    console.log(exist4)




//// using method ( map())
////Creates a new array by applying a function to each element of an existing array.Does NOT modify the original array.
let arr5 = [34, 23, 12, 67, 54]
let search5 = 12;
let ser5=arr5.map(e => e===search5) // [false, false, true, false, false]
let exist5 = ser5.includes(true) ? `${search5} exist` : `${search5} not exist`;
console.log(exist5);




