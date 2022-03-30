// Comparing 2 Arrays by value

let sameValCounter = 0

let arr = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) {
        sameValCounter += 1;
    }
}

console.log(sameValCounter); // 5

// using every() - every method tests whether all elements in the array pass the test implemented by the provided function
// Returns boolean

const hasSameElement = (a, b) => {
    return a.length === b.length && a.every((element, i) => element === b[i]);
}

// hasSameElement checks that the length of the arrays passed to it are the same
// if length check passes, then .every() is on array a and checks if it's value is identical to the value in same index in b array

// returns true if all values are same

console.log(hasSameElement([1,2],[1,2])); //

