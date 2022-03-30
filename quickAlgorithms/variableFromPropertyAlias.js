// Using an alias to rename and create a variable from properties of an object

// bad way for renaming the variable

const profile = { age: 20, status: "single"};

const {age, status} = profile; // destructuring used to extract properties. Variables have to match the property name.

const profileAge = age; // re-assigning variable name manually
const profileStatus = status;

console.log(profileAge); // 20
console.log(profileStatus); // single

// How to use alias
// : used to assign the alias, so variable can be renamed in one line

const {age: aliasAge, status: aliasStatus} = profile;

console.log(aliasAge); // 20 
console.log(aliasStatus); // single

