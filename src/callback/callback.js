// console.log에 강하게 의존하고 있어서 다른일을 할 수가 없다.
function repeat(n){
    for(var i = 0 ; i < n ; i++){
        console.log(i)
    }
}
console.log('repeat start');
repeat(5)

//
console.log('repeat1 start');
function repeat1(n){
    for(var i = 0 ; i < n ; i++){
        if(i % 2 !== 0) console.log(i)
    }
}
repeat1(5);


console.log('repeat2 start');
function repeat2(n,f){
    for(var i = 0 ; i < n ; i++){
        f(i)
        //logOdd(0),logOdd(2),
    }
};


function logAll(i){
    console.log(i);
}

console.log('logAll start');
repeat2(5,logAll);


console.log('logOdd start');
function logOdd(i){
    if(i%2 !== 0){
        console.log(i);
    }
}
repeat2(5,logOdd);