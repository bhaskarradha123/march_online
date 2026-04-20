let arr=[107,3,432,23,44];

// ======================Find Sum of array elements========================
   //1.Iterating a loop
   //2.Reduce function 

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum); 


let  sum=arr.reduce(
    (sum,value)=>{
        return sum+value;
    }
);
console.log(sum);

// =============find Maximum number=====================
        //    1.Sorted

        let sorted=arr.sort((a,b)=>a-b); // default ascending order
        console.log(sorted);
        
        console.log('maixmum ',sorted[arr.length-1]);
        console.log('minimum ',sorted[0]);

        // or Math functions

        let max=Math.max(...arr);
        console.log('maximum',max);
        let min=Math.min(...arr);
        console.log('minimum',min);
        
        
// =================sort users based on marks=================
   let users=[
    {"name":"studentA", marks:78},
    {"name":"studentB", marks:88},
    {"name":"studentC", marks:98},
    {"name":"studentD", marks:92},  
   ]
  
//    higher to lower marks
    let sortedUsers= users.sort((a,b)=>b.marks-a.marks);
     console.log(sortedUsers);
     
    
 

        