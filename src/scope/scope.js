var x = "global";

function foo() {
  var x = "function people";
  console.log(x);
}

foo();
console.log(x);

//javascript는 기본적으로
if (true) {
  var test = 11;
}

console.log(test);
