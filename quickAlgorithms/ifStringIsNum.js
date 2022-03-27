let stringNums = "12345";
let nonNums = "1234hhh";

let isnum = /^\d+$/.test(stringNums);

console.log(isnum); // true, all string values are numbers

let isnum2 = /^\d+$/.test(nonNums);

console.log(isnum2); // false, not all string values are numbers (hhh)