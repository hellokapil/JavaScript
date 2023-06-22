const num = [2,4,10,22,3,8]
const array = num.some(function(element){
    return element >= 10
})

console.log(array);
/*---------------------------------------------------*/

const array2 = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array2.every(even));
// Expected output: true
/*Hello this is a new change*/

Shivani