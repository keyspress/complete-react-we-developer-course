

// const add = (a, b)  => {
//   return a + b;
// };

// console.log(add(55, 5));

const user = {
  name: 'Kyle',
  cities: ['Tampa', 'Las Vegas', 'London'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    return this.cities.map((city) => city + ' is the bomb diggity! Says ' + this.name);
    }
    // this.cities.forEach( (city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  };

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3, 5, 87],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());