
// // Cash number Counter (INR Denomination)

let Amount = Number(prompt('Enter amount'));

if (Amount) { console.log(`Amount is ${Amount}`) }
if (isNaN(Amount)) { console.log('Invalid Input') }

if (Amount >= 500) {
    console.log(`Numbers of 500rs notes = ${Math.floor(Amount / 500)}`)
    Amount = Amount % 500;
}
if (Amount >= 200) {
    console.log(`Numbers of 200rs notes = ${Math.floor(Amount / 200)}`)
    Amount = Amount % 200;
}
if (Amount >= 100) {
    console.log(`Numbers of 100rs notes = ${Math.floor(Amount / 100)}`)
    Amount = Amount % 100;
}
if (Amount >= 50) {
    console.log(`Numbers of 50rs notes = ${Math.floor(Amount / 50)}`)
    Amount = Amount % 50;
}
if (Amount >= 20) {
    console.log(`Numbers of 20rs coins or notes = ${Math.floor(Amount / 20)}`)
    Amount = Amount % 20;
}
if (Amount >= 10) {
    console.log(`Numbers of 10rs coins or notes = ${Math.floor(Amount / 10)}`)
    Amount = Amount % 10;
}
if (Amount >= 5) {
    console.log(`Numbers of 5rs coins = ${Math.floor(Amount / 5)}`)
    Amount = Amount % 5;
}
if (Amount >= 2) {
    console.log(`Numbers of 2rs coins = ${Math.floor(Amount / 2)}`)
    Amount = Amount % 2;
}
if (Amount >= 1) {
    console.log(`Numbers of 1rs coins = ${Math.floor(Amount / 1)}`)
    Amount = Amount % 1;
}