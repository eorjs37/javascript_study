# 클로저
```
자신이 생성되었을때의 렉시컬 환경을 기억하는 것
```

## 렉시컬 환경
```
함수가 선언되었을 때 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 하는 렉시컬 스코프의 실체이다.
```

## 예시
```javascript
function outerFunc(){
    var  x = 10;
    var innnerFunc = function(){
        console.log(x);
    }
    innnerFunc();
}

outerFunc();
```