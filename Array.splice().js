// Splice

// Array.splice changes array by removing or replacing existing elements. Changes original array

// Parameter - splice(startingIndex, Count, (optional new element), (optional new element))
// Returns - the numbers it removed from the array (must be saved to new variable)

const nums = [1,2,3,4,5];

const deletedNums = nums.splice(2, 3); // remove 3 elements starting at index 2 

console.log(nums);              // [1,2]
console.log(deletedNums);       // [3,4,5]

// Splice can be used to add elements to an array - just specify which index and Count as 0

nums.splice(2,0,"added3","added4","added5","added6");

console.log(nums);