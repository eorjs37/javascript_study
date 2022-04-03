//ES5 객체
var person = {
    name:'CHOI',//프로퍼티
    age:30, //프로퍼티
    getAge: function(){ //메소드
        console.log('ES5 current age : ' , this.age);
    }
}

//ES6 객체
var person2 = {
    name:'CHOI',//프로퍼티
    age:30, //프로퍼티
    getAge(){ //메소드 : ES6에서는 function을 생략할 수 있다.
        console.log(`ES6 current age : ${this.age}`);
    }
}

person.getAge();
person2.getAge();