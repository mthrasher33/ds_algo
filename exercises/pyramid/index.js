// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// my solution
function pyramid(
  height,
  width = 0,
  activeColumn = 0,
  activeRow = 0,
  rowChars = ''
) {
  // end the loop
  if (activeRow === height) {
    return;
  }

  width = height * 2 - 1;

  //go up a row
  if (rowChars.length === width) {
    console.log(rowChars);
    activeRow++;
    activeColumn = 0;
    pyramid(height, width, activeColumn, activeRow);
    return;
  }

  // add a character
  const numberOfHashes = (activeRow + 1) * 2 - 1;
  const leftBound = width / 2 - numberOfHashes / 2;
  const rightBound = width / 2 + numberOfHashes / 2 - 1;

  rowChars += activeColumn < leftBound || activeColumn > rightBound ? ' ' : '#';
  activeColumn++;
  pyramid(height, width, activeColumn++, activeRow, rowChars);
}
module.exports = pyramid;
