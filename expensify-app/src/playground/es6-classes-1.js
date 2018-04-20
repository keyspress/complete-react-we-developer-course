

class Person {
  constructor(name = 'Who Knows?', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Sup ' + this.name + '!';
    return `Sup? I'm ${ this.name }! `;
  }
  getDescription() {
    return `${ this.name } is ${ this.age } year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = 'Undeclared') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()){
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  } 
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()) {
      greeting += `I'm Visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Person('Kyle Spresser');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

const aged = new Person('George Burns', 800);
console.log(aged.getDescription());

const slacker = new Student('Stoner McGee', 19, 'Basket Weaving');
console.log(slacker);
console.log(slacker.hasMajor());
console.log(slacker.getDescription());

const foreigner = new Traveller('Wilber', 32, 'Fantasy Island');
console.log(foreigner.getGreeting());