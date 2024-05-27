function curry(fn){
    return function(fn2){
        return function(a){
            return function(b){
                return fn(a,b) + fn2(a,b)
            }
        }
    }
}

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

const result1 = curry(sum);
console.log(result1.toString());

const result2 = curry(sum)(multiply);
console.log(result2.toString());

const result3 = curry(sum)(multiply)(3)(5);
console.log(result3);