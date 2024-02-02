function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str).toLowerCase()
  return formattedStr === reverseString(formattedStr)
}

function removeNonAlphanumeric(str) {
  let cleaned = ''
  for (const char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      cleaned += char
    }
  }
  return cleaned
}

function reverseString(str) {
  let reversed = ''
  for (const char of str) {
    reversed = char + reversed
  }
  return reversed
}

// Test Cases
console.log(`Is 'racecar' a palindrome? ${isPalindrome('racecar')}`) // true
console.log(`Is 'hello' a palindrome? ${isPalindrome('hello')}`) // false
