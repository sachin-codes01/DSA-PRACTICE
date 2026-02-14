
////Equal Triangle
let p = 4;
for(let i = 1; i <= p; i++){
    for(let j=1;j<=p-i;j++){
        process.stdout.write(' ')
    }
    for(let k = 1 ;k<=i;k++){
        process.stdout.write(' *')
    }
    console.log()
}

    console.log()

////Reverse Equal Triangle
let q = 4;
for(let i=q;i>=1;i--){
    for(let j=1;j<=q-i;j++){
        process.stdout.write(' ')
    }
    for(let k = 1 ;k<=i;k++){
        process.stdout.write(' *')
    }
    console.log()
}

