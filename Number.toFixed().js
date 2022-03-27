// toFixed(x) returns a number with a certain number of decimal places. Returns a string!
// toPrecision(x) specifies the number of significant digits

let num = 1.2345

num = num.toFixed(2);
console.log(num);

// fourSigFigs = num.toPrecision(4); doesn't work with Node
// console.log(fourSigFigs);

decimalFloor = Math.floor(num); // floor to nearest integer
decimalCeiling = Math.ceil(num); // round up to nearest integer
decimalRound = Math.round(num); // round normally
removeDecimals = Math.trunc(num); // remove decimals

console.log(`Round down always - ${decimalFloor}
Round up always - ${decimalCeiling}
Round normally - ${decimalRound} 
Remove decimals - ${removeDecimals}`);