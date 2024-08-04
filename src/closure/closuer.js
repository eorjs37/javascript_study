function outerFunc(){
    var  x = 10;
    var innnerFunc = function(){
        console.log(x);
    }
    innnerFunc();
}

outerFunc();

function outerFunc2(){
    var x = 10;
    var innnerFunc2 = function(){
        console.log(x);
    }

    return innnerFunc2
}

const inner  = outerFunc2();
inner();