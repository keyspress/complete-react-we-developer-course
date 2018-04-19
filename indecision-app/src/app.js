// import './utils.js';
// import subtractAsDefault, { square, add } from './utils.js';

// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtractAsDefault(100, 70));

import isSenior, { isAdult, canDrink } from './person.js';

console.log(isAdult(18));
console.log(isAdult(15));

console.log(canDrink(21));
console.log(canDrink(5));

console.log(isSenior(65));
console.log(isSenior(3));