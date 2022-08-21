//생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("CHOI");

console.log(me.constructor === Person);
