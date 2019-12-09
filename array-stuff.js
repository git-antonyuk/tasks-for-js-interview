// How do you add an element at the begining of an array? How do you add one at the end?
const arr = ['a', 'b', 'c', 'd']

// Solution 
var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
// With ES6, one can use the spread operator:

myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];

// Or, in short:

myArray = ['start', ...myArray, 'end'];