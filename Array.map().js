// Map method

// Applies the calculation in the function to all elements of the original array and pushes the new values to another array

const arr = [1,2,3,4,5,6,7,8,9,10];

let productOfFive = arr.map((element) => {
    return element * 5;
});

console.log(productOfFive);