const Counter = (function () {
  //카운트 상태 변수
  let num = 0;

  function Counter() {}

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.descrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
})();

const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.descrease());
console.log(counter.descrease());

console.log(counter.num);
