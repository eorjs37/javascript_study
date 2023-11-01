function add(num1, num2) {
    console.log(num1, num2);
}
add(5, 8)

function currying(fn) {
    return function (num1) {
        return function (num2) {
            return fn(num1, num2)
        }
    }
}

function add2(num1, num2) {
    return num1 + num2;
}

const cur = currying(add2)
console.log(cur(1)(2))