//// Butterfly Pattern

// for(let i=0;i<=4;i++){
// for(let j=0;j<=i;j++){
//     process.stdout.write(' *')
// }
// for(let k=0;k<=4-i;k++){
//     process.stdout.write(' ')
// }
// console.log()
// }

// for(let i=0;i<=3;i++){
// for(let j=0;j<=3-i;j++){
//     process.stdout.write(' *')
// }
// for(let k=0;k<=i;k++){
//     process.stdout.write(' ')
// }
// console.log()
// }




//// Butterfly Pattern

let n = 4;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }
    for (let k = 1; k <= 2 * (n - i); k++) {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }
    console.log();
}

for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }
    for (let k = 1; k <= 2 * (n - i); k++) {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }
    console.log();
}