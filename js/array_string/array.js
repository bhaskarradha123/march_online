
// creating an array
// array literal
// let arr=[10,20,30];
// console.log(arr);
// console.log(arr.length);// 3 size or length
// let arr2=[10,"mango",true,{"name":"raj"}]
// console.log(arr2);

// //using new keyword
// let arr3=new Array(10,20,30,40);//[10,20,30,40]
// console.log(arr3);
// let arr4=new Array(4);//[_,_,_,_]
// console.log(arr4);

// // from function
// let value="hello world";
// let arr5=Array.from(value);
// console.log(arr5);

// // of function
// let arr6=Array.of(10,20,30,40);//[10,20,30,40]
// console.log(arr6);
// let arr7=Array.of(2);//[2]
// console.log(arr7);













     //  0  1  2
let arr=[10,20,30];

console.log(arr);
//adding values
arr[4]='hello';
console.log(arr);
arr.push('end')
console.log(arr);
arr.unshift('start')
console.log(arr);

// updating values
arr[2]='welcome';
console.log(arr);
console.log(arr[3]);//undefined

// delete values
let first=arr.shift();
console.log('first element :',first);
console.log(arr);
let last=arr.pop();
console.log('last element : ',last);
console.log(arr);
delete arr[1];
console.log(arr);












// // accessing values from array
// console.log(arr[0]);//10
// console.log(arr[3]);//undefined
// console.log(arr[-1]);// undefined

// console.log(arr.at(0));//10
// console.log(arr.at(-1));//20
// console.log(arr.at(4));//undefined





