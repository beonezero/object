const person = {
  userName: "Yauheni",
  age: 27,
  isMarried: true,
  sayHi: function (name) {
    console.log(`Привет ${name} Меня зовут ${this.userName}`);
  },
};

for (let key in person) {
  console.log(key, ":", person[key]);
}
