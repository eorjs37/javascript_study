function Circle(radius) {
  this.radius = radius;

  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

//반지름이 1인 Circle
const circle1 = new Circle(1);

//반지름이 2인 Circle
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);

//Circle 생성자 함수는 인스턴스를 생성할 때마다 getArea를 새롭게 만든다
//이렇게 만들면 새로운 객체마다 똑같은 함수가 여러번 생긴다는 단점이 존재한다.
// 그러므로 getArea는 한번만 생성해야하는것이 낫다.

/* 아래처럼 prototype을 통해 생성한다. */

function CirclePrototype(radius) {
  this.radius = radius;
}

CirclePrototype.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circleProto1 = new CirclePrototype(1);
const circleProto2 = new CirclePrototype(2);

function Constructor(name) {
  this.name = name;
}

const cons1 = new Constructor("CHOI");

console.log(Constructor.prototype);
console.log(cons1.__proto__);
