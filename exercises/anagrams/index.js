// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// my solution
function anagrams(stringA, stringB) {
  const charMapA = getCharMap(stringA);
  const charMapB = getCharMap(stringB);

  // don't even need to make the maps if you just sort and comp the strings
  return JSON.stringify(charMapA) === JSON.stringify(charMapB);

  // have to do all this if you don't sort
  // if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
  //   for (let char in charMapA) {
  //     if (charMapA[char] !== charMapB[char]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // } else {
  //   return false;
  // }
}

function getCharMap(string) {
  const sanitizedString = [
    ...string.replace(/[^\w]/g, '').toLowerCase(),
  ].sort();

  let charMap = {};
  for (let char of sanitizedString) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
anagrams('Whoa! Hi!', 'Hi! Whoa!');

module.exports = anagrams;
