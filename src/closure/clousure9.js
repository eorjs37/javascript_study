function Person(name, age) {
  this.name = name; //public
  let _age = age; //private
}

Person.prototype.sayHi = function () {
  console.log(`Hi! ma name is ${this.name}. I am ${_age}`);
};

const per1 = new Person("Choi", 31);
per1.sayHi();
