//사람이라는 객체를 "추상화"
const person ={
    name:'Lee',
    address:'Seoul',
}

console.log(person);


// 속성(프로퍼티)과 동작(메소드)를 묶은것을 객체라고 한다.
const circle = {
    radius:5,
    //원의 지름,
    getDiameter(){
        return 2 * this.radius;
    },
    //원의 둘레 2 * pi * r
    getPerimeter(){
        return 2 * Math.PI * this.radius
    },
    //원의 넓이 pi*(r*r)
    getArea(){
        return Math.PI * this.radius ** 2;
    }
}

//생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getArea = function(){
        return Math.PI * this.radius ** 2;
    }
}

//반지름이 1인 인스턴스
const circle1 = new Circle(1);

//반지름이 2인 인스턴스
const circle2 = new Circle(2);

/* circle1,circle2에서 getArea는 중복이 된다. 그리하여 새로운 인스턴스를 만들때마다 생기는것보다는 공유하는것이 바람직 */
console.log(circle1.getArea === circle2.getArea);

/* Circle이라는 생성자 함수의 prototype에 구현을 해준다. */
function Circle2(radius){
    this.radius = radius;
}

Circle2.prototype.getArea = function(){
    return Math.PI * this.radius ** 2;
}


//반지름이 1인 인스턴스
const circle3 = new Circle2(1);

//반지름이 2인 인스턴스
const circle4 = new Circle2(2);

console.log(circle3.getArea === circle4.getArea);



//생성자 함수
function Pers(name ='', age = 10){
    this.name = name;
    this.age = age;
}

//프로토타입
Pers.prototype.getAge = function(){
    return this.age;
}

//인스턴스 생성
const pers1 = new Pers('최대건',30);
console.log(pers1);

const pers2 = new Pers('최대건',31);
console.log(pers2);

console.log(pers1.getAge === pers2.getAge);