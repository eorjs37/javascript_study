//스코프 확인
var x = "global";

function foo() {
  var x = "local";
  console.log(x);

  function bar() {
    //내부함수
    console.log(x); //현재 함수에서의 변수 x를 찾지 못하였으므로 상위 스코프인 foo에서 x변수를 찾는다. 그리하여 x값은 local이된다.
  }

  //bar 함수 호출
  bar();
}
//foo 함수 호출
foo();
//현재 제일 상위 스코프이며 현재 스코프에서 변수 x를 찾는다. 현재 스코프에서 x가 존재하므로 x는 global으로 나온다.
console.log(x);
