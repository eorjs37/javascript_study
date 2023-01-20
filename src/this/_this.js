//객체 리터럴
const circle = {
  radius: 5,
  getDiameter() {
    //this는 메서드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
  },
};
console.log(circle.getDiameter());

//생성자 함수
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  //this는 생성자 함수가 생성할 인스턴를 가리킨다.
  return 2 * this.radius;
};

const circle2 = new Circle(2);
console.log(circle2.getDiameter());
