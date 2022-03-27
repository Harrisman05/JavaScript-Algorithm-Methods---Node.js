let stringNums = "12345";
let nonNums = "1234hhh";

let isnum = /^\d+$/.test(stringNums);

console.log(isnum);

let isnum2 = /^\d+$/.test(nonNums);

console.log(isnum2);