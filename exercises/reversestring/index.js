// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return [...str].reverse().join('');
// }

// my solution
// function reverse(srt) {
//   const strArray = [...str];
//   for (i = 0; i < (strArray.length - 1) / 2; i++) {
//     var tempVal = strArray[i];
//     strArray[i] = strArray[strArray.length - 1 - i];
//     strArray[strArray.length - 1 - i] = tempVal;
//   }
//   return strArray.join('');
// }

// function reverse(str) {
//   debugger;
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }
  return reversed;
}

module.exports = reverse;
