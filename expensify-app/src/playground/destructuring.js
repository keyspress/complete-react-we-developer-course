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

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);