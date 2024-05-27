function curry(f){
    return function(a){
        return function(b){
            return f(a,b);
        }
    }
}

function sum(a,b){
    return a+b;
}


const sumFunc = curry(sum);
console.log(sumFunc);
console.log(sumFunc(1));
console.log(sumFunc(1)(2));