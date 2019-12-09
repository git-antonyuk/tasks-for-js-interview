// Write a simple function (less than 160 characters) 
// that returns a boolean indicating whether or 
// not a string is a palindrome.

console.log(isPalindrome("Racecar"));                 // logs 'true'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'

// Solution 
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}