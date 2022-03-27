// Spread Operator

// Spread Operator spread outs items in an iterable (string, array, object, map etc.) into separate arguments

// 3 places where spread operator can be used:

// 1) In function call 
// 2) In array literals
// 3) In object literals

// 1) In function calls

function countNums(nums) {
    console.log(...nums); // array passed into function, then each num is individually logged
}

const someNums = [1,2,3,4,5,6,7,8,9];

countNums(someNums);

const tvShows = ["Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag"];

console.log(tvShows); // prints the array
console.log(...tvShows); // spreads each element of the array as a separate argument, so prints a string of all values

// 2) In array literals

// ... can be used to create new arrays from element exisiting in a current array, or combine array
// avoids issue of arrays as reference types as each value is passed in separately

// Combining Arrays

const parents = ["Lorie", "Steve"];
const kids = ['Jake', 'Annie', 'Jess'];

const wholeFamily = [...parents, ...kids];
const wholeFamilyNested = [parents, kids]; 

console.log(wholeFamily); // [ 'Lorie', 'Steve', 'Jake', 'Annie', 'Jess' ]
console.log(wholeFamilyNested) // Nested Array --> [ [ 'Lorie', 'Steve' ], [ 'Jake', 'Annie', 'Jess' ] ]

// Copying an array without reference type issues (shallow copy)

const originals = ['Mona Lisa', 'American Gothic', 'The School of Athens'];

const Linkedcopies = originals // Reference type problem, both arrays point to the same address in the HEAP

const copies = [...originals]; // only copies one level deep

console.log(copies); 
// [ 'Mona Lisa', 'American Gothic', 'The School of Athens' ]

// 3) In Object literals

const mainColors = {
    brightRed: "#e55039",
    waterfallBlue: "#38ada9"
}

const accentColors = {
    lightGrey: "#778ca3",
    swanWhite: "#f7f1e3"
}

fullPalette = {allColors: true, ...mainColors, ...accentColors};

console.log(fullPalette); // new object with allColors property and both main and accent colors


