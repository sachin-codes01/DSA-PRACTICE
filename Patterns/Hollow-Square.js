
//// Hollow Square

let b = 4;
for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= b; j++) {
        if (i == 1 || i == b || j == 1 || j == b) {
            process.stdout.write(' *')
        } else {
            process.stdout.write('  ')
        }
    }
    console.log()
}
