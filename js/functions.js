// function declaration
// f1()//hoisting 
// function f1(){  // no arg functions
//     console.log('hello world');  
// }

// f1(); //calling a function --function caller
// f1();
// f1();
// function f2(name){ // arg function
//     console.log(`my name is ${name}`);
    
// }
// f2(); //my name is undefined
// f2('radha');//my name is radha
// f2('bhaskar');//my name is bhaskar




// function expression
// let f1=function(){
//     console.log("function expression");
    
// }
// f1();



// arrow function or shorter syntax for function
// let f3=()=>{
//   console.log("arrow function");
  
// }
// f3();

// //Anonymous Function
// setTimeout(f1(), 5000);

// setTimeout(() => {
//     console.log("anonymous function");
// }, timeout);


// call back functions

function isSuccess(){
    console.log("authentication success");
    
}
function isFailure(){
    console.log("login failed");
    
}
function isAuthenticate(userName ,password , success, failure){
    if(userName=='user'&& password=='user@123'){
          success(); 
    }else{
          failure();
    }
}

isAuthenticate('admin','user@123',isSuccess,isFailure);