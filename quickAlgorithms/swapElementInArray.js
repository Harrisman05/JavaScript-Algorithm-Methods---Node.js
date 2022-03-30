// How to swap elements in an array1

arr = [1,2,3,4,5];

// old way using temporary variable

let temp = arr[0]; // use temp to hold first element
arr[0] = arr[4]; // swap first and last
arr[4] = temp; // assign last to temp

console.log(arr); // [ 5, 2, 3, 4, 1 ]

// using destructuring to swap elements in place

// destructuring holds value, so this can be done in place

arr2 = [1,2,3,4,5];

// [Original order] = [Swapped order]

[arr2[0], arr2[4]] = [arr2[4], arr2[0]];

console.log(arr2); // [ 5, 2, 3, 4, 1 ]

// works for swapping variables too

let a = 1;
let b = 2;

[a,b] = [b,a]

console.log(a); // 2
console.log(b); // 1
