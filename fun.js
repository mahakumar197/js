function greet(){  // declaration
    console.log("hello");
}
greet()

//function expression

let greeting = function(){
    console.log("good morning")
}
greeting();

//arrow function - shortform of function

let a = 10;
let b = 20;

add=(a,b)=>{
   return a+b; //retuen - retunrs the value 
}
console.log(add(a,b))

//callback function a function passed an argument to an another function 

function user(name) {
  console.log("hello" + " " + name);
}

function process(callback) {
  let userName = "maha";
  callback(userName);
}
process(user);

//CONSTRUCTOR FUNCTION - is used to create multiple objects with same structre 
// this - keyword to attach properties to the object
// new - keyword tio create an object

function Person(name, age){
    this.name = name;
    this.age  = age;

    this.abc= function(){
        console.log("hello my name is "+ this.name + " im "+ this.age+" years old")
    }
}

let Person1 = new Person("gopi",25);
let Person2 = new Person("thamu",23);

Person1.abc();
Person2.abc();

// let Person1 ={
//     name: "gopi",
//     age:25
// }
