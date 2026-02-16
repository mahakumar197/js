function greet(){   //block of code , set of instructions, reuse it, easy to test
    console.log("good morning");
}
greet(); // calling the function
greet();

let userName = function(){
    console.log("maha");
}
userName();
let classes = function(){
    console.log("10 am");
}
classes();

// arrow function - short term of function
let a = 10;
let b = 20;

add =(a,b)=>{
    return a+b; /// return - it returns value
}
console.log(add(a,b));

function addNum(){
    let c= 10;
    let d= 20;
    //console.log(add(c+d));
    let e = c+d;
    return e;
}
console.log(addNum());
