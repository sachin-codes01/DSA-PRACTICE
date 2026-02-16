//// Zig-Zag Pattern (M)

let n = 9;
for(let i=1;i<=3;i++){
for(let j=1;j<=n;j++){
    if((j % 4 === 3 && i === 1) || (j % 4 === 2 && i === 2) || (j % 4 === 0 && i === 2) ||   (j % 4 === 1 && i === 3) ){
    process.stdout.write('*')
    }else{
    process.stdout.write(' ')
    }
}
console.log()
}