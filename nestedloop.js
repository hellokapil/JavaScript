let i =1
let j =1

while(i<=10){
    while(j<=10){
        console.log("innerLoop",j);
        j++
    }
    console.log("OuterLoop",i);
    i++
}