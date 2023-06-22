function Sum(a,b){          // Tradational Way to declare a function and that can be Hoisted
  
  return a+b;


}

// Funtion accepts data as parameter and function can also return data

const Sum2 = function(a,b){         // Function Expression And also Called Anonymous Function, Anonymous Function can't be Hoisted
  return a+b;
}


let a = Sum2(50,50)
console.log(a)

//Here is the changes
const Sum3=(a,b) => {        // Arrow Function
  return a+b;
}
console.log(Sum3(10,29));


/* Parameters are like variable which is specific to that function.

   Parameter defined when we call the function and pass arguments */
