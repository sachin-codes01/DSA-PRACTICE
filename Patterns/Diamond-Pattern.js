//// Diamond Pattern

let Pattern = 5;
for (let i = 1; i <= Pattern; i++) {
    for (let j = 1; j <= Pattern - i; j++) {
        process.stdout.write('  ')
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write('* ')
    }
    console.log()
}
for (let i = Pattern - 1; i >= 1; i--) {
    for (let m = 1; m <= Pattern - i; m++) {
        process.stdout.write('  ')
    }
    for (let n = 1; n <= 2 * i - 1; n++) {
        process.stdout.write('* ')
    }
    console.log()
}