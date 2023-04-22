// const person = {
//   userName: "Yauheni",
//   age: 27,
//   isMarried: true,
//   sayHi: function (name) {
//     console.log(`Привет ${name} Меня зовут ${this.userName}`);
//   },
// };

class Person {
  constructor(userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }
  sayHi(name) {
    console.log(`Привет ${name} Меня зовут ${this.userName}`);
  }
}

const person1 = new Person("Yauheni", 27, true);

console.log(person1);

// person1.sayHi("Василий");
