let arr = [10,20,30,40]        // Spread Operator in Array
let arr2 = [50,60,70,80]
let arr3 = [...arr2]   // Copy array using Spread Operator
let arr4 = [...arr, ...arr2]   // This is called Concatenation 
console.log(arr3);

let obj1 ={firstName:"Kapil",Designation:"Software Engineer"}       // Spread Operator in Object
let obj2 = {Salary:"5 Lpa"}  // Copy Object using Spread Operator
let obj3 = {...obj1,...obj2} // Object Concatenation using Spread Operator 
console.log(obj3);

function Sum(a,b,c,d,e){   // Spread Operator in Function
     console.log(a+b+c+d+e)
}

let arr5 = [10,20,30,40,50]
Sum(...arr5)
