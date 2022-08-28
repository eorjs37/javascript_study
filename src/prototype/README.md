# 객체 지향 프로그래밍

## 객체

> 객체는 속성과 행동을 하나로 묶어서 표현한 것이다.

## 추상화

> 필요한 속성만 간추려 내는 것을 "추상화" 라고 한다.  
> 아래처럼 사람은 이름,주소 라는 속성을 간추릴 수 있다.

```javascript
const Person = {
  name: "Choi",
  address: "Seoul",
};

console.log(Person);
```

## 상속과 프로토타입

> 상속은 객체지향 프로그래밍의 핵심이며, 중복을 불필요하게 제거 할 수 있다.  
> javascript에서는 프로토타입을 통해 상속이 이루어진다.

```javascript
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

console.log(circleProto1.getArea === circleProto2.getArea);
```

### 프로토타입

> 객체간의 상속을 사용할때 프로토타입을 사용하며, 프로토타입은 어떤 객체의 상위 객체 역할을 하는 객체로써, 프로퍼티, 메소드를 제공한다.

## 객체 생성 방법

- 객체 리터럴 생성법

```javascript
const obj = { x: 1 };
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty("x"));
```

- Object생성자 함수의 생성된 객체

```javascript
const obj2 = new Object();
obj2.x = 2;

console.log(obj2.constructor === Object);
console.log(obj2.hasOwnProperty("x"));
```

- 생성자 함수에 의해 생성된 객체

```javascript
// 3. 생성자 함수

function Person(name) {
  this.name = name;
}

const me = new Person("CHOI");

console.log(me.constructor === Person);
console.log(Person.prototype.constructor === Person);
```
