/// convertions of array
//join - join all the elements in an array

let words = ["javascript", "is", "fun"];
let sentence = words.join("");
console.log(sentence);

// reverse method - it will reverse

let z = [1, 2, 3, 4, 5];
z.reverse();
console.log(z);

//split - used to split the word
let text = "apple,banana,mango";
let fruits1 = text.split(",");
console.log(fruits1);

//sort

let names = ["maha", "amid", "vignesh", "gopi", "thamu"];
names.sort();
console.log(names);

let nums = [10, 20, 25, 30, 6, 8, 99, 22];
nums.sort(function (a, b) {
  return b - a;
});
console.log(nums);

let numbers = [1, 2, 3, 4, 5, 6];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

let minNumber = Math.min(...numbers); //spread operator - creatre a new array ES6(ECMA SCRIPT)
console.log(minNumber);
let maxNumber = Math.max(...numbers); //spread operator - creatre a new array ES6(ECMA SCRIPT)
console.log(maxNumber);
