function makeCounter(predicate) {
  let counter = 0;

  return function () {
    counter = predicate(counter);
    return counter;
  };
}

//보조함수
function increase(n) {
  return ++n;
}

function descrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const descreaser = makeCounter(descrease);
console.log(descreaser());
console.log(descreaser());
