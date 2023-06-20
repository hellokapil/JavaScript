let numbers = [2,3,4,5,6,7]

let newArray = numbers.map(function(element,index){
    return element*10
    
})
console.log(newArray);



for (let i = 0; i < numbers.length; i++){   // Tradational way for MAP Method
  numbers[i] = numbers[i] * 3;
}

console.log(numbers);