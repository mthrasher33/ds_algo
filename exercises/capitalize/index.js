// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// alternative solution
function capitalize(str) {
  let results = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      results += str[i].toUpperCase();
    } else {
      results += str[i];
    }
  }
  return results;
}

// my solution
// function capitalize(str) {
//   let returnArr = [];
//   str.split(' ').map((word) => {
//     returnArr.push(word[0].toUpperCase() + word.slice(1));
//   });
//   return returnArr.join(' ');
// }

module.exports = capitalize;
