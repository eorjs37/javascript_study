const carInfo = { engine:"gdi", cc:3000};
const person1 = { name: 'MaxGunChoi', age:30, car:carInfo};

//이렇게하면 car속성의 객체는 깊은복사가 되지 않는다.
const person2 = Object.assign({},person1);

console.log(person1 === person2);

console.log(person1.car === person2.car)