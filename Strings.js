// let str = "My name is Kapil Jatav";
// let str2 = "I'm 29 Years Old"
// let finalstr = str2.concat(" ",str)
// console.log(str[17]);
// const string4 = new String("A String object");
// console.log(typeof string4);

function employee(id, name){
    this.id=id;
    this.name=name;
}
let emp = new employee(123,"Kapil");
employee.prototype.email = "hellokapil@outlook.com"
console.log(emp.email);

let emp2 = new employee(189,"Rashmi");
employee.prototype.email = "Rashmi@outlook.com"
console.log(emp2.email);
console.log(emp2);