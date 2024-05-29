/**
 * 인자를 똑같이 받고 결과값만 다르게 받고 싶다
 * ex) 5,4를 받는 인자가 존재하고, 결과(곱셈,덧셈)이 달랐으면 좋겠다
 */

const curry = a => b => fn =>{
    return fn(a,b);
}

const sum = (a,b) => a+b;
const multipy = (a,b) => a*b;

const result1 =curry(2)(4);
console.log(result1.toString());

const sumResult = result1(sum);
const multipyResult = result1(multipy);

console.log(sumResult);
console.log(multipyResult);
console.log(curry(2)(4)(sum));

function curryFunc(a){
    return function(b){
        return function(fn){
           return fn(a,b);
        }
    }
}

function sumFn(a,b){
    return a+b;
}

function multipyFn(a,b){
    return a*b;
}

const result2 = curryFunc(2)(4);


const resultSumFn = result2(sumFn);
const resultMultipyFn = result1(multipyFn);

console.log(resultSumFn);
console.log(resultMultipyFn);
