// reduce method

// reduce array down to one value. Useful for obtaining total sum or incrementing a counter. 

// Parameters - .reduce(ACCUMULATOR, ELEMENT, optional INDEX, optional ARRAY0 => {...}, optional ACCUMULATOR START VALUE)

// Return - Whatever value is returned is added to the previous value of the accumulator

const arr = [1,2,3,4,5];

totalSum = arr.reduce((accumulator, element) => {
    return accumulator + element;
});

console.log(totalSum);