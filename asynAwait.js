//synchronous - one job at a time

// asynchronous - dont wait do other work meanwhile

//promise - is a box that will give you reslt in future 
// pending - waiting 
// funfilled - success
//rejected - failed 

// let promise = new Promise(function(pass,fail){
//     pass("home work done");
// })
// promise.then(function(passResult){
//     console.log(passResult);
// })

// let promise1 = new Promise(function(resolve,reject){
//     reject("home work not done")
// })
// promise1.catch(function(error){
//     console.log(error)
// })

// let marks= 30;
// let promise =new Promise(function(pass,fail){
//     if(marks >= 35){
//         pass("passed");
//     }
//     else{
//         fail("failed");
//     }
// })

// promise.then(function(pass){
//     console.log("pass")
// }).catch(function(error){
//     console.log(error);
// })

//async & await 

// async function test() {
//     return "hello"
// }

// test().then(console.log)


function pizza(){
    return  new Promise(function(success){
        setTimeout(function(){
            success("pizza ready");
        },2000)
    })
}
async function order() {
    let result = await pizza();
    console.log(result);
}
order();

//GEC & call stack 
//GEC - global execution stack
  