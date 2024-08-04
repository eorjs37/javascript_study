function makeCounter(predicate){
    let counter = 0;

    return function(){
        counter = predicate(counter);
        return counter;
    }
}


function increase(n){
    return ++n;
}

function decrease(n){
    return --n;
}


const increaser = makeCounter(increase);

// console.log(increaser());
// console.log(increaser());

const  decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());


function Counter(){
    let counter = 0;
    
    this.getCounter = function(){
        return counter;
    }

    this.setCounter = function(value){
        counter = value;
    }
}

Counter.prototype.increase = function(){
    let curCounter = this.getCounter();
    this.setCounter(++curCounter);
}

const counter1 = new Counter();

counter1.increase();
console.log(counter1.getCounter());