//1.객체 리터럴 방식
const obj = { x: 1 };
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty("x"));

//2. Object 생성자 함수
const obj2 = new Object();
obj2.x = 2;

console.log(obj2.constructor === Object);
console.log(obj2.hasOwnProperty("x"));

// 3. 생성자 함수

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi My name is ${this.name}`);
};

//상속구현
const me = new Person("CHOI");
const you = new Person("LEE");

me.sayHello();
you.sayHello();
