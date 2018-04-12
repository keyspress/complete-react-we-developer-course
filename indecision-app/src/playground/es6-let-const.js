var nameVar = 'Andrew';
var nameVar = "mike";
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jenny';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Bill';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

//Block Scoping

var fullName = 'Andrew Mead';

if(fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);