//call back function - a function passed an argument to an another function
 
function user(name){
    console.log("hello" + " " + name);
}

function process(callback){
    let userName ="maha";
    callback(userName);
}

process(user);
//sample 1 for add two number
function add(a,b,callback){
    let result = a+b;
    callback(result);
}
 add(5,10, function(result){
    console.log("the result is" + result)
 })


 // sample 2
function addingTwoNumber(c, d, callback){
    let resultNumber = c+d 
    callback(resultNumber);
}
function displayResult(value){
    console.log("the result is" + " "+ value)
}

addingTwoNumber(10,20, displayResult)


//constructor function  - itis user to create a multiple objects with same structure
//this - keyword
// new - used to create a new object

function person(name, age){
  this.name = name;
  this.age = age;

  this.abc = function () {
    console.log("my name is" + " " + this.name + "im" +" "+ this.age +" "+ "years old");
  };
}
 let person1 = new person("amid", 28);
 let person2 = new person("raghul", 26);

 person1.abc();
 person2.abc();

// let person1 ={
//     name :"amid",
//     age : 28
// }
















 
