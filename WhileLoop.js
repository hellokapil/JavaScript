let num =1, sumEven = 0, sumODD = 0;


while(num<=10){
    if(num%2==0){
        
        console.log(num,"Is Even");
        sumEven+=num
    }
    else{
        console.log(num,"Is ODD");
        sumODD+=num
    }
    num++
}
console.log(sumEven,"Sum Of EVEN NUMBERS");
console.log(sumODD, "Sum Of ODD NUMBERS");