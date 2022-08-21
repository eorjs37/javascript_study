const carInfo = { engine:"gdi", cc:3000};
const person1 = { name: 'MaxGunChoi', age:30, car:carInfo};

// 참조하는 변수만 들어가게 하는법
const person2 = person1;

console.log(person1 === person2)
