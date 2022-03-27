// parseInt function parses a string argument and returns an integer of the specified radix (the base in mathematicl numeral systems)

let myInt = 123;
let myStrInt = "456";
let address = "456 Main Ave 22.";
let myFloat = 123.456;
let myStrFloat = "345.567.789.345";
let cost = "12.99 per box";

console.log(parseInt(myStrInt)); // returns 456 integer type

console.log(parseInt(address)); // returns 456 integer type, it will stop parsing once there'a non-integer

console.log(parseInt(cost)); // returns 12
console.log(parseFloat(cost)); // returns 12.99