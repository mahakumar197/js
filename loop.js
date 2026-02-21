// loop - its robot  it repests the task again and again

for (let a = 1; a < 5; a++) {
  console.log("hello", a);
}
// for (let a = 10; a > 5; a--) {
//   console.log("hello", a);
// }
// // console.log("hello");
// //while loop
// let i = 2;
// while(i<= 8){
//     console.log("hi",i)
//     i++;
// }

// //do while - runs atleast once
// let d = 1;
// do{
//     console.log("welcome", d)
//     d++
// }while(d>7)

// //reverse

let str = "malayalam";
let reversed = "";

for(let i =str.length - 1; i>=0; i--){
    reversed += str[i];  /// reversed = reversed +str[i]
}
console.log(str.length);
console.log(reversed)
if(str == reversed){
  console.log("it is palindrom");
}
else{
  console.log("it is not palindrom")
}
//if else
// let age = 20;

// if (age >= 18) {
//   console.log("you are eligible to vote");
//   if (age > 200) {
//     console.log("hi");
//   } else {
//     console.log("bye");
//   }
// } else {
//   console.log("you are not eligible to vote");
// }

// let gopi = "gopi";
// if (gopi == "male") {
//   console.log("gopi is a male");
// }
// else if (gopi == "female") {
//   console.log("gopi is a female");
// }
// else {
//   console.log("else works");
// }