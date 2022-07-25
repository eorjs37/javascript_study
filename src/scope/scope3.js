var x = 1;
function foo(){
    var y = 2;
    console.log(x);
    console.log(y);
    console.log();
    function outer(){
        var z = 1;
        console.log(x);
        console.log(y);
        console.log(z);
    }

    outer();
}

foo();