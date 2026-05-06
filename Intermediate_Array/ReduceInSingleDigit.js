


function digitalRoot(n) {
    while (n >= 10) {
        let digites = String(n).split('').map(Number)
        let sum = 0;

        for (let d of digites) {
            sum += d
        }
        n = sum;
    }
    return n
}

console.log(digitalRoot(49))
