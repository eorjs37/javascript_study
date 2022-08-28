//인스턴스로 변경
function Person(name) {
  this.name = name;
}

const me = new Person("CHOI");

//프로토타입으로 교체할 객체
const parent = {
  constructor: Person,
  sayHello() {
    console.log(`Hi My name is ${this.name}`);
  },
};

//생성자 함수으 protoyype 프러퍼티와 프로토타입 간의 연결설정
Person.prototype = parent;

Object.setPrototypeOf(me, parent);

me.sayHello();

console.log(me.constructor === Person);
console.log(Object.getPrototypeOf(me));
