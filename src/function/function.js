//1.함수표현식
var square = function(number){
    return number * number;
}

const returnSquare = square(2);
console.log(returnSquare);


//2.함수 선언문 정의
function add(x,y){
    return x+y;
}

console.log(add(2,5));

//3.화살표 함수
const arrow = (x,y) =>{
    return x+y;
}


console.log(arrow(1,2));