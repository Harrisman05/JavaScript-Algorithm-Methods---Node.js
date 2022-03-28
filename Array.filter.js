// Filter method

// Pushes elements from an original array to a new array if the filter function returns true

const arr = [1,2,3,4,5,6,7,8,9,10];

evenNumsArr = arr.filter((element) => {
    return element % 2 === 0;
});

console.log(evenNumsArr);