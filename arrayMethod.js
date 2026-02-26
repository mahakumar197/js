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
let animals = ["cat", "dog", "lion", "tiger", "elephant", "deer"];
//             0      1      2      3       4         5
// console.log(animals.length);
// let selected = animals.slice(1,5);
// console.log(selected);

//.splice

let fruits = ["apple", "banana", "cherry", "mango"];
// fruits.splice(3,0,"orange","grape");  //3- starts with index number // 0 remove items
// console.log(fruits);
// fruits.splice(2, 2, "orange1", "grape1"); //3- starts with index number // 0 remove items
// console.log(fruits);

// let words = ["javascript", "is", "fun"];
// let sentence = words.join("");
// console.log(sentence);
// let z = [8, 2, 3, 7, 5];
// z.reverse();
// console.log(z);
// let text = "1,2,3,4";
// let fruits1 = text.split(",");
// console.log(fruits1);
let names = ["maha", "amid", "vignesh", "gopi", "thamu"];
names.sort();
console.log(names);

let numbers = [10, 20, 25, 30, 6, 8, 99, 22];
// nums.sort(function (x, y) {
//   return x - y;
// });
// console.log(nums);

let minNumber = Math.min(...numbers); //spread operator - creatre a new array ES6(ECMA SCRIPT)
console.log(minNumber);
let maxNumber = Math.max(...numbers); //spread operator - creatre a new array ES6(ECMA SCRIPT)
console.log(maxNumber);