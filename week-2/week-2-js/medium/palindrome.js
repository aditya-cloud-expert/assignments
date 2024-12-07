/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length === 0) return true;
//  return str.split('').reverse().join('') === str;
  return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

module.exports = isPalindrome;
