// let colors = ["red", "blue"];

// //1. add or remove an array

// //push - used to add an element in an end of an array
// colors.push("green");
// console.log(colors);
// colors.pop(); //used to remove an element in an end of an array
// console.log(colors);
// colors.unshift("white"); //used to add an element in an frist element of an array
// console.log(colors);
// colors.shift(); //used to remove an element in an frist element of an array
// console.log(colors);

// //2.find and check

// //indexOf- return the index
// console.log(colors.indexOf("red"));
// console.log(colors.includes("white")); // check the element is there or not

// //..length - give length
// console.log(colors.length);

//slice -extract the part of an Array
let animals= ["cat", "dog","lion","tiger","elephant","deer"]
   //             0      1      2      3       4         5
console.log(animals.length);
let selected = animals.slice(1,4);
console.log(selected);

//.splice  

let fruits =["apple","banana","cherry","mango"]
// fruits.splice(3,0,"orange","grape");  //3- starts with index number // 0 remove items 
// console.log(fruits);
fruits.splice(6, 0, "orange1", "grape1"); //3- starts with index number // 0 remove items
console.log(fruits);
