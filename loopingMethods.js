// // forEach - is used to go through each item in an arry one by one . it uses callback function

// //callback
// function greet(name){
//     console.log("hello "+ name);
// }
// function processUser(callback) {
//   let userName = "maha";
//   callback(userName);
// }
// processUser(greet);

// //foreach - only works for array
// let number =[10,20,30];

// number.forEach(function(num){
//     console.log(num);
// })

// let Students = ["gopi","thamu","kathir","vignesh","ragul","mugunthan"];
// Students.forEach(function(name){
//     console.log(name);
// })

// //for ... of - loop - is used to get the value from an array
// let fruits = ["apple","orange","banana"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// //for...in used to get index of an array or keys object
// let colors =["red","blue","green"];
// for(let index in colors){
//     console.log(index);
// }
let stu ={
    names :"ravi",
    age:12,
    grade:11
}
for(let key in stu){
    console.log(key);
}
