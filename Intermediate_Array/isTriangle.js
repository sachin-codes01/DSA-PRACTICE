function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return false
    if (a + b > c && b + c > a && a + c > b) {
        return true
    } else {
        return false
    }
}
console.log(isTriangle(4, 2, 3))