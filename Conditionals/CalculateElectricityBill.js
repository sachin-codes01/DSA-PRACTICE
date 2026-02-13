
// //Calculate electricity bill, eg: First 100 units → ₹5/unit ,Next 100 units → ₹7/unit ,Above 200 → ₹10/unit
// //if 700 units, then more then 400 means 300 is multiplayed by 300*13 and more then 201-400 means 200*8 and 101-200 means 101*6 and 0-100 then 100*4

let unit = Number(prompt('Enter units'))
let amount = 0;
if(unit>400){
    amount = (unit-400)*13;
    unit = 400;
}
if(unit>200 && unit<=400){
    amount += (unit-200)*8;
    unit = 200;
}
if(unit>100 && unit<=200){
    amount += (unit-100)*6;
    unit = 100;
}
if(unit<=100){
    amount += (unit-0)*4;
}
console.log(amount)

