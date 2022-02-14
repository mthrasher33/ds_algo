// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution
function maxChar(str) {
  const counter = {};
  let maxChar = '';
  let maxNum = 0;

  for (let char of str) {
    // counter[char] = counter[char] ? counter[char] + 1 : 1;
    counter[char] = counter[char] + 1 || 1;
  }

  for (let char in counter) {
    if (counter[char] > maxNum) {
      maxChar = char;
      maxNum = counter[char];
    }
  }
  return maxChar;
}

module.exports = maxChar;
