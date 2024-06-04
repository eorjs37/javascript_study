# 객체생성 패턴

## 네임스페이스 패턴
```
전역변수의 개수를 줄이는 패턴
전역객체 한개를 만들고, 객체 하나에 기능을 추가
```
### MYAPP 네임스페이스
```javascript
let MYAPP = {};

MYAPP.namespace = function(ns_string){
    let parts  = ns_string.split('.'),
        parents = MYAPP,
        i;
    // 처음에 중복되는 객체는 제거
    if(parts[0] === 'MYAPP'){
        parts = parts.slice(1);
    }
    for(i = 0 ; i < parts.length ; i++){
        // 프로퍼티가 존재 하지 않으면 빈객체 생성
        if(typeof parents[parts[i]] === "undefined"){
            parents[parts[i]] ={}
        }
        parents =parents[parts[i]]
    }

    return parents;
}

console.log(MYAPP.namespace('MYAPP.module.module2'));
console.log(MYAPP.namespace('MYAPP.module'));
```

## 비공개 프로퍼티와 메소드
```
javascript에서는 클로저를 통해서 비공개 처리가 가능하다
```

```javascript
// 생성자로 비공개 처리
function Person(paramName){
    let name = paramName;

    this.getName = function(){
        return name;
    }
}

const person1 = new Person("choidaegeon");
console.log(person1.getName());
console.log(person1.name);

// 객체 리터럴로 비공개 처리
let myObj = (function(){
    let name = "oh my obj";
    return{
        getName:function(){
            return name;
        }
    }
}())
console.log(myObj.getName());
```