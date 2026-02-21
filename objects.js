// object- it is non primitive data type
// we can store multiple values
// key - value pairs

let person = {
  name: "gopi",
  age: 25,
  city: "chennai",
};
console.log(person);
console.log(person.age, person.name);

// index value start from 0 ith positon
console.log(person["age"]);

person.mobileNumber = "987654323456";
console.log(person);

delete person.age;
console.log(person);

//function in object

let classRoom = {
  class1: "js",
  start: function () {
    console.log("12 pm");
  },
};
classRoom.start();
console.log(classRoom.class1);
console.log(classRoom);

// using constructor
let car = {
  name: "HONDA",
  start: function () {
    console.log("this is my new car" + " " + this.name);
  },
};
car.start();

//object with array

let words = {
  fruits: ["apple", "orange", "grape"],
};
console.log(words.fruits[1]);

//complex object

let games = {
  name: "wwe",
  mode: "ps5",
  configuration: {
    CPU: "i8",
    RAM: 12,
    ROM: 64,
  },
};
console.log(games);
console.log(games.configuration.CPU);
delete games.configuration.ROM;
console.log(games);
