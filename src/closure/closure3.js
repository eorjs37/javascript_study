/*
 여기서 num은 누구나 다 접근 가능하여, num이 오염될 위험이 있다.
 즉 외부에서 접근가능
*/
// let num = 0;

// const increase = function () {
//   num++;
// };

// increase();
// console.log(num);
// increase();
// console.log(num);
// increase();
// console.log(num);

/*
 외부에서 접근은 불가능 하지만,  호출때마다 항상 초기화가 된다.
*/
// const increase2 = function () {
//   let num = 0;

//   return num++;
// };

const increase3 = (function () {
  let num = 0;

  return function () {
    return ++num;
  };
})();
const i1 = increase3();
const i2 = increase3();
const i3 = increase3();

console.log(i1);
console.log(i2);
console.log(i3);
console.log(increase3.num);
