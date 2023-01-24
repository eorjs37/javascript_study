function getThisBinding() {
  console.log(arguments);
  return this;
}

//this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding());

//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));

//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩 + 인자 전달
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
console.log(getThisBinding.call(thisArg, 1, 2, 3));

//bind
console.log(getThisBinding.bind(thisArg)());
