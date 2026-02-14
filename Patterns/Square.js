//// Square using *

let n = 4;
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        process.stdout.write(' *')
    }
    console.log()
}

////or  method-2

let h =4;
for(let i=1;i<=h;i++){
    let line = ''
    for(let j=1;j<=h;j++){
        line += ' *'
    }
    console.log(line)
}
