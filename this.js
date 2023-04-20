const person = {
  userName: "Yauheni",
  age: 27,
  isMarried: true,
  sayHi: function (name) {
    console.log(this);
    console.log(`Привет ${name} Меня зовут ${this.userName}`);
  },
};

person.sayHi("Алексей");
