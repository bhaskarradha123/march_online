
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
// let arr=[10,20,30];

// console.log(arr);
// //adding values
// arr[4]='hello';
// console.log(arr);
// arr.push('end')
// console.log(arr);
// arr.unshift('start')
// console.log(arr);

// // updating values
// arr[2]='welcome';
// console.log(arr);
// console.log(arr[3]);//undefined

// // delete values
// let first=arr.shift();
// console.log('first element :',first);
// console.log(arr);
// let last=arr.pop();
// console.log('last element : ',last);
// console.log(arr);
// delete arr[1];
// console.log(arr);


// // accessing values from array
// console.log(arr[0]);//10
// console.log(arr[3]);//undefined
// console.log(arr[-1]);// undefined

// console.log(arr.at(0));//10
// console.log(arr.at(-1));//20
// console.log(arr.at(4));//undefined


//        0          1          2      3     4       5
// let arr = ['hello', 'students', 'welcome', 'to', 'array', 'session'] //6

// let index=0;
// while(index<arr.length){
//    console.log(arr[index]);
//    index++
// }

// let index=0;
// do{
//    console.log(arr[index]);
//    index++
// }while(index<arr.length)

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);   
// }

// no need of index position . it directly deals with
// arr.forEach(
//     (value) => {
//     console.log(value);
// })

// for (const index in arr) {
//     console.log(arr[index]);   
// }

// for (const value of arr) {
//       console.log(value);  
// }



let arr=  [10,2,30,4,50];
        //1,2,9,16,25 

//processing the data 
arr.forEach((value)=>{console.log(value*value)});
let squareArr=arr.map((value)=> value*value);
console.log(squareArr);

// filtering the data
arr.forEach((value)=>{if(value%2==0){console.log(value);}});
let evenArr=arr.filter((value)=> value%2==0)
console.log(evenArr);

// filter and return first result
let find=arr.find((value)=> value%2==0)
console.log(find);

// filter and return last result
let findLast=arr.findLast((value)=> value%2==0)
console.log(findLast);

// filter and returns true if it is matching with all values or else return false
let every=arr.every((value)=> value%2==0)
console.log(every);

let some=arr.some((value)=> value%2==0)
console.log(some);






