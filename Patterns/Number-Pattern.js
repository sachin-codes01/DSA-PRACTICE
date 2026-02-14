////Left Number Pattern 

for (let i = 1; i <= 4; i++) {
    let count = ''
    for (let j = 1; j <= i; j++) {
        count += j + ' '
    }
    console.log(count)
}


//// Reverse Left Number Pattern
for (let i = 1; i <= 4; i++) {
    let count = ''
    for (let j = 1; j <= 4-i+1; j++) {
        count += j + ' '
    }
    console.log(count)
}

////or
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4-i+1; j++) {
        process.stdout.write(j + ' ')
    }
    console.log()
}


//// Right Number Pattern
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4-i; j++) {
        process.stdout.write('  ')
    }
    for (let j = 1; j <=i; j++) {
        process.stdout.write(j + ' ')
    }
    console.log()
}



//// Reverse Right Number Pattern
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i-1; j++) {
        process.stdout.write('  ')
    }
    for (let j = 1; j <=5-i; j++) {
        process.stdout.write(j + ' ')
    }
    console.log()
}


////Right Number Pattern Floyd’s Triangle (not repeated numbers)
let count = 1;
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(count + ' ')
        count++
    }
    console.log()
}
