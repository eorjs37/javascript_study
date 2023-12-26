function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.gretting = function () {
    console.log(`Hi I'm ${this.name.first}.`);
}
const person1 = new Person('choi', 'daegeon', 31, 'male', 'football')
person1.gretting()

//Teacher 상속
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}
//console.log(Object.create(Person.prototype));
Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher;
const teacher1 = new Teacher('choi11', 'daegeon', 31, 'male', 'football', 'math')
teacher1.gretting()
console.log(Teacher.prototype);
// console.log(Object.getOwnPropertyNames(Teacher.prototype));