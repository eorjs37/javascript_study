const carInfo = { engine:"gdi", cc:3000};
const person1 = { name: 'MaxGunChoi', age:30, car:carInfo};

const person2 = JSON.parse(JSON.stringify(person1));

console.log(person1 === person2);

console.log(person1.car === person2.car)