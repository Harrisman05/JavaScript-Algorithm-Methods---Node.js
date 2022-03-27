// Number.isInteger() method determines whether the passed value is an integer. True if integer, false if integer

let int = 5;
let float = 5.5;

let integerCheckTrue = Number.isInteger(int);
let integerCheckFalse = Number.isInteger(float);

console.log(integerCheckTrue); // True
console.log(integerCheckFalse); // False
