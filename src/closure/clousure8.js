function Person(name, age) {
  this.name = name;
  let _age = age;

  this.sayHi = function () {
    console.log(`hi my name is ${this.name}. i am ${_age}`);
  };
}

const me = new Person("Lee", 20);
me.sayHi();

console.log(me.name);
console.log(me._age);
