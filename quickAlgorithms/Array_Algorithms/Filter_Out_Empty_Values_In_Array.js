// How to filter out empty values from an array

const arr = [1,0,null,undefined,"",false];

const nonEmptyVals = arr.filter(Boolean);

console.log(nonEmptyVals); // [1]

// Boolean converts each value to True or False. Filter only maps values that return true