// Slice returns a shallow copy of a portion of an array from a start and end (end not included).
// Original array is not modified

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

let antAndBison = animals.slice(0,2);

console.log(antAndBison);

// Slice Array

// Same concept applies to string. Original string is not modified

let fName = "Harley";

let removeLastLetter = fName.slice(0, -1);

console.log(removeLastLetter);
