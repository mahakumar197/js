// objects - store multiple value 
// we can handle complex data
// here we have key value pairs

//object - indexing always strts with 0

let person ={
    name : "amid",
    age: 28,
    place: "nellur"
}
console.log(person);

console.log(person.age); // dot notation
console.log(person["age"]); // bracket notation

person.qualification = "B Tech"; // new value added
console.log(person);
delete person.age;
console.log(person);

// functions in objects 

let car ={
    brand : "hundai",
    start : function(){
        console.log("car has started")
    }
}
car.start(); // calls the function inside an object


// using constructor 
let user ={
    userName : "vignesh",
    greet : function(){
        console.log("hi, im" + " " +this.userName) //this called a current object value 
    }
}
user.greet();

//object with array
let words = {
    fruits : ["apple", "orange", "banana"]
}
console.log(words.fruits[1]);

// complex object - object inside an another object

let games ={
    name: "cricket",
    mode: "ps5",
    configuration:{
        cpu: "i8",
        RAM : 12,
        ROM : 30
    }
}

console.log(games);
console.log(games.configuration);
games.configuration.player = 2;
console.log(games);
delete games.configuration;
console.log(games)