// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any type of value (both object and primitive values) may be used as either a key or a value.

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));

map1.set('a', 97);

console.log(map1.size);

map1.delete('c')

console.log(map1);

console.log(map1.has('a'));