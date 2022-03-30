// how to remove duplicates from an array and return an array

const arr = [1,2,2,2,1,3];

const noDups = [...new Set(arr)];

// cast array to Set object to remove duplicates

// use spread operator to extract values from set as separate arguments and place them into the array

console.log(noDups); // [ 1, 2, 3 ]
