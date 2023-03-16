// complete the given function

function palindrome(str){
str = str.toLowerCase().replace(/[\W_]/g, '');

  // Compare the string to its reverse
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
