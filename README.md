# Javascript Study


## 1. 객체
 > 자바스크립트에서는 원시값을 제외한 모든것이 객체이다.  
 객체는  프로퍼티와 객체로 구성된것이다.

src/object.js
```javascript
var person = {
    name:'CHOI',//프로퍼티
    age:30, //프로퍼티
    getAge: function(){ //메소드
        this.age++;
    }
}
```

### 1-1. ES5에서 객체 생성하는 법
```javascript
var person = {
    name:'CHOI',//프로퍼티
    age:30, //프로퍼티
    getAge: function(){ //메소드
        console.log('ES5 current age : ' , this.age);
    }
}
```

### 1-2. ES6에서 객체 생성하는 법
```javascript
//ES6 객체
var person2 = {
    name:'CHOI',//프로퍼티
    age:30, //프로퍼티
    getAge(){ //메소드 : ES6에서는 function을 생략할 수 있다.
        console.log(`ES6 current age : ${this.age}`);
    }
}
```