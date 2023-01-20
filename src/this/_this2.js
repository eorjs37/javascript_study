//전역에서 this는 객체 window를 가리킨다.
console.log(this);

//생성자 함수
function square1(number) {
  // 일반함수 내부에서의 this는 window를 가리킨다.
  //console.log(this);
  return number * number;
}

square1(2);

//객체 리터럴
const person = {
  name: "Lee",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this);
    return this.name;
  },
};

console.log(person.getName());

//Person2 객체
function Person2(name) {
  this.name = name;
  console.log(this);
}

const me = new Person2("Lee");
