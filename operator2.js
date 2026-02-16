//Logical operator // if are conditions are correct or not - op- true or false 

let a=10;
let b = 20;
let c = 30;

//AND - && - both the CONDITION MUST BE TRUE 

console.log((a>b) && (b<c));  // a>b - flase, b<c - true 
console.log(a < b && b < c); 

//OR || - pipe line symbol - either any one condition will be true -

console.log(a<c || a>b); 
console.log(a > c && b < a); 

//NOT ! - reverse the result (opposite result)

console.log(!(a<b));


//string operator - which is used to join the string together

let userFirstName = "maha";
let userLastName = "lakshmi";

console.log(userFirstName + userLastName);
console.log(userFirstName + " hi " + userLastName); // concadination 

//+=
userFirstName += "welcome";
console.log(userFirstName);

let d= 50;
let e= "50";
let f = 20;
console.log(d+e);
console.log(d + e + f);
console.log(d + f + e);