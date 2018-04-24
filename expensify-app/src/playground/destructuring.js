// const person = {
//   name: 'George',
//   age: 800,
//   location: {
//     city: 'Somewhere',
//     temp: 32
//   }
// };

// const { name: firstName = 'Anony Mouse', age } = person;

// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}.`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array desctructuring
//

const address = ['1299 S Juniper St.', 'Somewhereville', 'Maine', '74464'];

const [ , city, state = 'California' ] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ name, , price] = item;

console.log(`A medium ${name} costs ${price}.`);