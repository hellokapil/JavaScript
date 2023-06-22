function Sum(a,b){          // Tradational Way to declare a function and that can be Hoisted
  
  return a+b;


}



const Sum = function(a,b){         // Function Expression And also Called Anonymous Function, Anonymous Function can't be Hoisted
  return a+b;
}


let a = Sum(50,50)
console.log(a)

//Here is the changes
const Sum2=(a,b) => {        // Arrow Function
  return a+b;
}
console.log(Sum2(10,29));


/* Parameters are like variable which is specific to that function.

   Parameter defined when we call the function and pass arguments */
