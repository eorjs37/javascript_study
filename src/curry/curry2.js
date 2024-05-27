const curry = fn => fn2 => a => b => fn(a,b) + fn2(a,b);

const add = (a,b) => a+b;

const multiply = (a,b) => a*b;

const result = curry(add);
console.log(result);