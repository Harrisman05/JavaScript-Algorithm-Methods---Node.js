// for of statement creates a loop iterating over iterable objects, including String, Array, Map, Set etc
// no need to initialise count variable (let i = 0) or condition (i < array.length) 
// more concise syntax

const array1 = ['a','b','c'];

// old way

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// for of loop

for (let element of array1) {
    console.log(element);
}