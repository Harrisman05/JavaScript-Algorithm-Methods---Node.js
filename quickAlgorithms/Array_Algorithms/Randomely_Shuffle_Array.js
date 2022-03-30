// How to randomly shuffle the order of elements in an array

const numsArr = [1,2,3,4,5];

const randomArray = numsArr.sort(() => Math.random() - 0.5);

// How it works

// Math.random returns a random number between 0 and 1. 
//So if it happens to give you a number less then 0.5 then you get a negative number and if it’s over that then you get a positive.

// if return value is negative, a is placed before b
// if return value is positive, b is placed before a