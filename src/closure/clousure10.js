const Person = (function () {
  let _age = 0; //private

  //생성자 함수
  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHi = function () {
    console.log(`Hi! My Name is ${this.name}. I am ${_age}`);
  };

  return Person;
})();

const me = new Person("Lee", 20);
me.sayHi();
