var count = 0;

function increase(n){
    return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);


//not pure
var count2 = 0;

function increase(){
    return ++count2;
}

increase();
console.log(count2);


increase();
console.log(count2);