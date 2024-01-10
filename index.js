function isPalindrome(word) {
  // Loop through half of the string
    for(let i = 0; i < word.length / 2; i++) {
        // Check if the character from the start and the end are the same
        if(word[i] !== word[word.length - 1 - i]) {
            return false; // If they are not the same, it's not a palindrome
        }
    }
    return true; // If the loop completes without returning false, it's a palindrome
}

/* 
  pseudocode here
  - declare function isPalindrome.
  - create a for loop to check up to the middle of the string.
  - inside loop, create an if statement to check if a letter doesn't match
  if it doesnt match,, return false
  - loop ends if true
 
*/

/*
  explanation of solution here
- This is essentially a matching game.
- If first letter and last letter are the same, all systems go! 
- If the second letter matches the second to last letter, again, all systems go.
- Check every letter as you move to the middle. If they match, it's true/ a palindrome.
- If the letters don't match at some point, it's false/ not a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
