function Person(name) {
  this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi My name is ${this.name}`);
};

const me = new Person("CHOI");

//hasOwnProperty는 Object.prototype의 메소드 이다.
console.log(me.hasOwnProperty("name"));

//call 메소드는 this로 사용될 객체를 전달하면서 함수를 호출한다.
console.log(Object.prototype.hasOwnProperty.call(me, "name"));

//오버라이딩 프로퍼티 섀도잉
