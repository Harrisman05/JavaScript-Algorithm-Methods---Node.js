// indexOf() method, given one argument (a substring to search for) searches the entire string and returns the index of the
// first occurence of the specified substring.

// given a second argument, position, the method returns the first occurence of the specified substring at an index greater than
// or equal to the specified number

const phrase = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirstDog = phrase.indexOf("dog");

const positionOfLazy1 = phrase.indexOf("lazy");
console.log(positionOfLazy1); // returns 35, the index of the letter L in lazy

positionOfDog2 = phrase.indexOf("dog", indexOfFirstDog + 1);
console.log(positionOfDog2); // returns 52, as search starts one position after the first dog instance

// Checking occurences

// if there is no occurence of a substring, the return value is -1. This can be used to check occurence.

console.log('Blue Whale'.indexOf('Blue') !== -1); // True as index if rightly returned
console.log('Blue Whale'.indexOf('blue') === -1); // True, as no match was found