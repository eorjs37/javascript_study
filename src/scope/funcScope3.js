var x = 10;

function foo() {
  var x = 100;
  console.log(x); //100

  function bar() {
    // 내부함수
    x = 1000;
    console.log(x); // 1000
  }

  bar();
}
foo();
console.log(x); // 10
