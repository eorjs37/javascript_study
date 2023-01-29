//클로저란 , 중첩된 함수가 잇을 경우 상위 함수가 종료되더라도 , 상위 함수의 변수를 참조 할 수 있는것을 말한다.
const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };

  return inner;
}

const innerFunc = outer();
innerFunc();
