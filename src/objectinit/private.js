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