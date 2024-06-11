function Person(){
    let name = "";

    this.getName = function(){
        return name;
    }

    this.setName = function(val){
        name = val;
    }
}

Person.prototype = (function(){
    let broswer  = "";
    return{
        setBroswer:function(val){
            broswer = val;
        },
        getBroswer:function(){
            return broswer;
        }
    }
}())

const person1 = new Person();
person1.setName("최대건")
person1.setBroswer("Chrome")
console.log(person1.getName());
console.log(person1.getBroswer());