// higher order array methods - it take another function as input , help us work with array data easily
// map - transforming data - used to change every item in an array.

let numbers = [1,2,3,4];

let double = numbers.map(function(num){
    return num*2;
})

console.log(double);

let names =["raghl","amid","vignesh","kathir","gopi"]
let result = names.map(function(name){
    return "mr."+ name
})
console.log(result);

//filter - filtering data - when the condition satisfies 

let someNumbers = [1,2,3,4,5,6]

let evenNumbers = someNumbers.filter(function(num){
    return num%2 === 0;
})
console.log(evenNumbers);
let marks =[35,40,20,90,100,77,47,30,28,26];
let passed = marks.filter(function(mark){
    return mark >=35; 
})
console.log(passed);

//reduce - accumulating data - combine all the values
let numberss =[10,20,30];
let total = numberss.reduce(function(a,b){
    return a+b;
},0)
console.log(total);
// acc = 0
// current =10 => 

    let cash =[20,100,500,2000,2]
    let overAllCash = cash.reduce(function(x,y){
return x+y;
    },0)
    console.log(overAllCash)

    let letters = ["h","e","l","l","o"];
    let word = letters.reduce(function(a,b){
        return a+b;
    },"")
    console.log(word);
    