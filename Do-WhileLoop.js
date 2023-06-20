'use strict';


let num = 1, sumEven = 0, sumODD = 0;

do{
    if (num%2==0) {
        console.log(num
            , "Is Even");
        sumEven+=num
    } else {
        console.log(num,"Is Odd");
        sumODD+=num
    }
    num++
}
while(num<=10);
console.log("Sum of Even Numbers is",sumEven);
console.log("Sum of Odd Numbers is", sumODD); 









