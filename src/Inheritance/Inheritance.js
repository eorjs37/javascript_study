function Person() {
    this.name = "choidaegeon"
}

Person.prototype.sayHello = function () {
    console.log(`hello my name is ${this.name}`);
}

function Asian() {
    this.name = "Koorea"
}

Asian.prototype = new Person();

const asian = new Asian();
console.log(asian.name);
asian.sayHello();