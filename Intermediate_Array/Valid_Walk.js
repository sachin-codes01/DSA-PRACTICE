


function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }
    let n = 0;
    let s = 0;
    let e = 0;
    let w = 0;
    for (let direction of walk) {
        if (direction === 'n') n++
        else if (direction === 's') s++
        else if (direction === 'e') e++
        else if (direction === 'w') w++
    }
    return n === s && e === w
}

const walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
console.log(isValidWalk(walk))
const walk1 = ['n', 's', 'n', 's', 'n', 'n', 'n', 's', 'n', 's']
console.log(isValidWalk(walk1))
