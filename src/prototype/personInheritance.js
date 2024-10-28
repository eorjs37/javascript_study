// 생성자 함수
function House(width,age){
    this.width = width;
    this.age = age;
}

// House에서 생성한 인스턴스 들이 info메소들을 공유하도록 한다.
House.prototype.info = function(){
    return `방 넓이는 ${this.width}평이고 ${this.age}년식 입니다`
}

const apt = new House(32,2020)
const studio  = new House(6,2020)

console.log(apt.info === studio.info);

// Person 생성자 함수가 생성한 인스턴스는 부모객체의 prototype인 House.prototype 으로부터 info를 상속받는다
console.log(apt.info());
console.log(studio.info());