const Person = (function () {
  //생성자 함수
  function Person(name) {
    this.name = name;
  }

  //프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi My name is ${this.name}`);
  };

  return Person;
})();

const me = new Person("CHOI");

me.sayHello = function () {
  console.log(`Hey My name is ${this.name}`);
};

me.sayHello();
