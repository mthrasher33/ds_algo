// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my solution
// function reverseInt(n) {
//   const revNumArr = [...n.toString()].reverse();
//   const revNumString =
//     n >= 0 ? parseInt(revNumArr.join('')) : 0 - revNumArr.slice(0, -1).join('');
//   return parseInt(revNumString);
// }life

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
  // if (n < 0) {
  //   return parseInt(reversed) * -1;
  // }
  // return parseInt(reversed);
}

module.exports = reverseInt;
