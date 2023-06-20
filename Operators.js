let a = 10
let b = 20

console.log(a+b); // Addition 
console.log(a-b); // Subtraction
console.log(a*b); // Multiplication
console.log(a/b); // Division
console.log(a%b); // Modulus
console.log(a**b);  // Exponent 
console.log(++a); // pre-Increment
console.log(a++); // post-Increment
console.log(--a); // pre-Decrement
console.log(a--); // post-Decrement

let obj1 ={                 // Spread Operator
    name: "Kapil",
    Designation: "Software Engineer",
  }
  let obj2 ={
    email: "hellokapil@microsoft.com"
  }
  let obj3 ={...obj1,...obj2}
  console.log(obj3)