const person = {
  userName: "Yauheni",
  age: 27,
  isMarried: true,
  sayHi: function (name) {
    console.log(`"Привет" ${name}`);
  },
};

// const newLocal = person.sayHi = function (name) {
//     console.log(`Привет, ${name}`);
// };

person.sayHi("Алексей");
