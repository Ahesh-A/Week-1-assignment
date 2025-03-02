/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrome('malaalam'));

module.exports = isPalindrome;
