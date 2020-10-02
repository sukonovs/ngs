const PI = Math.PI;
const someVar = 'test';

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  PI,
  [someVar]: 1000,
};

console.log(obj.PI);
console.log(obj.test);
