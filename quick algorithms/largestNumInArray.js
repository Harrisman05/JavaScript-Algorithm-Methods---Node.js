// How to find largest Num in array

// Trick to it: using spread operator and Math.max

const arr = [-111,1,2,3,4,5,6,7,8,77];

let largestNum = Math.max(...arr);
let smallestNum = Math.min(...arr);

console.log(largestNum);
console.log(smallestNum);