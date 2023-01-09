var foo = function () {
  var a = 3,
    b = 5;

  var bar = function () {
    var b = 7,
      c = 11;

    // a : 3 , b : 7 , x : 11

    a += b + c;

    // a : 21 , b : 7 , x : 11
  };

  // a :3 , b : 5, c : undefined

  bar();

  // a :21 , b:5 , c : 11
  console.log("b : ", b);
};

foo();
