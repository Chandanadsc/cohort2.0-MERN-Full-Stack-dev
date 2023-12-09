/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1= str.split('').join('').toLowerCase().replace(/[^a-z0-9]/g, ''); // I found this last piece in chatgpt-- .replace(/[^a-z0-9]/g, '')
  let str2= str1.split('').reverse().join('');
  if(str1!=str2)
  {
    return false;

  }

  return true;
}

console.log(isPalindrome("Able, was I ere I saw Elba!")); // Outputs: true
console.log(isPalindrome("Hello, World!")); // Outputs: false
module.exports = isPalindrome;
