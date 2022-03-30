// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new arry

const array1 = ['a','b','c'];
const array2 = [1,2,3]
const array3 = [false, true, false];

const allArrays = array1.concat(array2).concat(array3);

console.log(allArrays);

/* [
  'a',   'b',  'c',
  1,     2,    3,
  false, true, false
]
*/