////Print all even and odd numbers in an array.

////using logic

let array = [43,32,12,65,45];
for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
        console.log('Even',array[i])
    }else{
        console.log('Odd',array[i])
    }
}

////or

let array1 = [43,32,12,65,45];
let even = []
let odd = []
for(let i=0;i<array1.length;i++){
    if(array1[i]%2===0){
        even.push(array1[i])
    }else{
        odd.push(array1[i])
    }
}
console.log("Even:", even)
console.log("Odd:", odd)


////using method
////Returns a new array with all elements that satisfy a condition.Does NOT change the original array.
let arr = [43,32,12,65,45];
let Even = arr.filter(e=>e%2===0) 
let Odd = arr.filter(e=>e%2!==0)
console.log("Even:", Even)
console.log("Odd:", Odd)


