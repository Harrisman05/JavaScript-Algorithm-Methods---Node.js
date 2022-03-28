// Object.assign() method copies all enumerable own properties from one or more source objects to a target object

// returns the modified target object

let arr1 = [1,2,3];

let arr2 = [7,8,9];

let newArr2 = Object.assign([], arr2);

console.log(newArr2);