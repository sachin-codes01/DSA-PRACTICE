
////Right Triangle
let e = 4;
for (let i = 1; i <= e; i++) {
    for (let j = 1; j <= e - i; j++) {
        process.stdout.write('  ')
    }
    for (let k = 1; k <= i; k++) {
        process.stdout.write(' *')
    }
    console.log()
}



////Reverse Right Triangle

let r = 4;
for(let i=r;i>=1;i--){
    for(let j=1;j<=r-i;j++){
        process.stdout.write('  ')
    }
    for(let k = 1 ;k<=i;k++){
        process.stdout.write(' *')
    }
    console.log()
}

