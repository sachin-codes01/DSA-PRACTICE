//// Hollow Pyramid
let n = 7;
for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n - i; k++) {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) {
            process.stdout.write('*');
        } else {
            process.stdout.write(' ');
        }
    }
    console.log()
}