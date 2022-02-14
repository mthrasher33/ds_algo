// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// stephens recursion solution
function steps(column, row = 0, stair = '') {
  if (column === row) {
    return;
  }

  // build your row
  if (column === stair.length) {
    console.log(stair);
    steps(column, row + 1);
    return;
  }

  // build your stair string
  const add = stair.length <= row ? '#' : ' ';
  steps(column, row, stair + add);
}

steps(4);

// my recursion solution
// let rows = 0;
// function steps(n) {
//   rows++;
//   if (rows > n) {
//     return;
//   }
//   let rowChars = '';
//   for (i = 0; i < n; i++) {
//     if (i < rows) {
//       rowChars += '#';
//     } else {
//       rowChars += ' ';
//     }
//   }
//   console.log(rowChars);
//   steps(n);
// }

// my solution
// function steps(n) {
//   if (!n) {
//     return;
//   }
//   let row = 1;

//   while (row <= n) {
//     let printedLine = addCharToString('#', row) + addCharToString(' ', n - row);
//     console.log(printedLine);
//     row++;
//   }
// }

// function addCharToString(char, numberOfTimes) {
//   let str = '';
//   for (i = 0; i < numberOfTimes; i++) {
//     str += char;
//   }
//   return str;
// }

module.exports = steps;
