function f1() {
  var f1x = 1;
  console.log(f1x);

  function f2() {
    var f2x = 2;
    console.log(f2x);
    console.log(f1x);
  }
  f2();
}

f1();
