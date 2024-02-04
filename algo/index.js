// Pseudocode Documentation:

// Function to check if a given string is a palindrome
function isPalindrome(str) {
  // Step 1: Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = removeNonAlphanumeric(str).toLowerCase();

  // Step 2: Check if the formatted string is equal to its reverse
  return formattedStr === reverseString(formattedStr);
}

// Function to remove non-alphanumeric characters from a string
function removeNonAlphanumeric(str) {
  let cleaned = '';
  // Step 3: Iterate through each character in the string
  for (const char of str) {
      // Step 4: Check if the character is alphanumeric
      if (isAlphanumeric(char)) {
          // Step 5: Add alphanumeric characters to the cleaned string
          cleaned += char;
      }
  }
  // Step 6: Return the cleaned string
  return cleaned;
}

// Function to check if a character is alphanumeric
function isAlphanumeric(char) {
  // Step 7: Helper function to check if a character is alphanumeric using a regular expression
  return /[a-zA-Z0-9]/.test(char);
}

// Function to reverse a string
function reverseString(str) {
  let reversed = '';
  // Step 8: Iterate through each character in the string
  for (const char of str) {
      // Step 9: Add the current character to the beginning of the reversed string
      reversed = char + reversed;
  }
  // Step 10: Return the reversed string
  return reversed;
}

// Considerations Documentation:

// Consideration 1: Handles long strings efficiently by iterating through characters once during formatting and reversing.
// Consideration 2: Handles special characters by removing non-alphanumeric characters before checking for palindromes.
// Consideration 3: Converts the string to lowercase to make the comparison case-insensitive.

// Whiteboard Demonstration Documentation:

// 1. Introduction:
// Explain the goal of the algorithm – checking if a string is a palindrome, considering alphanumeric characters and ignoring case.

// 2. Pseudocode Walkthrough:
// Step through each part of the pseudocode, emphasizing the importance of formatting, removing non-alphanumeric characters, and using helper functions for clarity.

// 3. Example:
// Demonstrate the algorithm with a sample string on the whiteboard, showing how it handles different cases and explaining the step-by-step process.

// Algorithm Complexity Documentation:

// Time Complexity:
// - Formatting the string: O(n), where n is the length of the input string.
// - Reversing the string: O(n), where n is the length of the formatted string.
// - Total Time Complexity: O(n)

// Space Complexity:
// - Storing the cleaned string: O(n), where n is the length of the input string.
// - Storing the reversed string: O(n), where n is the length of the formatted string.
// - Total Space Complexity: O(n)

// Alternative Solutions Documentation:

// 1. Array Methods:
// Pros: Concise and readable.
// Cons: May have higher space complexity due to converting the string to an array.
// Time Complexity: O(n), Space Complexity: O(n)

// 2. Recursive Solution:
// Pros: Elegant, but may have higher overhead due to function calls.
// Cons: Potential stack overflow for very long strings.
// Time Complexity: O(n), Space Complexity: O(n)

// 3. Two-Pointer Approach:
// Pros: Memory-efficient, especially for very long strings.
// Cons: Requires more complex code compared to the current solution.
// Time Complexity: O(n), Space Complexity: O(1)

// Comparison:
// Choose the solution based on specific requirements; the current solution is balanced and suitable for general cases. The alternatives have trade-offs in terms of code complexity and efficiency.
