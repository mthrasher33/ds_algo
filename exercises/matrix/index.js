// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}
// my bad solution
// function matrix(n, numToAdd = 1, spiral = []) {
//   // add in sprial or add in row?
//   // add in a spiral
//   // add if there is no number (create array if it doesn't exist and should), turn if there is a number or if you are out of space
//   // you always turn to the right!

//   if (!spiral.length) {
//     spiral = initializeSpiral(n);
//   }

//   addNumber(numToAdd, spiral); // this guy can be recursive
//   numToAdd++;
//   // matrix(n, numToAdd, spiral);

//   // shouldCreateArray(n, numberOfArrays);
//   // const shouldTurnRight;
// }

// function shouldAddNumber(maxNumber, currNumber) {
//   return currNumber <= maxNumber;
// }

// function getNewDirection(direction) {
//   switch (direction) {
//     case direction === 'RIGHT':
//       return 'DOWN';
//     case direction === 'DOWN':
//       return 'LEFT';
//     case direction === 'LEFT':
//       return 'UP';
//     case direction === 'UP':
//       return 'RIGHT';
//   }
// }

// function isSpaceOpen(matrix, xIndex, yIndex) {
//   return !matrix[yIndex][xIndex];
// }

// function shouldTurn(direction, xIndex, yIndex, matrix) {
//   switch ((direction, xIndex, yIndex)) {
//     case direction === 'RIGHT' &&
//       xIndex + 1 < matrix.length &&
//       isSpaceOpen(matrix, xIndex + 1, yIndex):
//       return false;
//     case direction === 'DOWN' &&
//       yIndex + 1 < matrix.length &&
//       isSpaceOpen(matrix, xIndex, yIndex + 1):
//       return false;
//     case direction === 'LEFT' &&
//       xIndex - 1 >= 0 &&
//       isSpaceOpen(matrix, xIndex - 1, yIndex):
//       return false;
//     case direction === 'UP' &&
//       yIndex - 1 >= 0 &&
//       isSpaceOpen(matrix, xIndex, yIndex - 1):
//       return false;
//     default:
//       true;
//   }
// }

// function addNumber(
//   numToAdd,
//   spiral,
//   xIndex = 0,
//   yIndex = 0,
//   direction = 'RIGHT'
// ) {
//   if (!shouldAddNumber(Math.pow(5, 2), numToAdd)) {
//     return;
//   }

//   spiral[yIndex][xIndex] = numToAdd; // adds at [0][0]

//   if (shouldTurn(direction, xIndex, yIndex, matrix)) {
//     direction = getNewDirection(direction);
//   }

//   if (direction === 'DOWN') {
//     yIndex++;
//     xIndex = spiral.length;
//   } else if (direction === 'UP') {
//     yIndex--;
//   }

//   // now set up the next add...
//   if (xIndex < spiral.length) {
//     xIndex++;
//   }
//   console.log('number', numToAdd);
//   numToAdd++;
//   addNumber(numToAdd, spiral);

//   // find the number below you in the array

//   // is it N adds in a row then you turn?
//   // should add like this
//   // [0][0]
//   // [0][1]
//   // [0][2]
//   // [1][2]
//   // [2][2]
//   // [2][1]
//   // [2][0]
//   // [1][0]
//   // [1][1]
// }

// function initializeSpiral(n) {
//   const spiral = new Array(n);
//   for (let i = 0; i < spiral.length; i++) {
//     spiral[i] = new Array(n);
//   }
//   return spiral;
// }

// matrix(3);

module.exports = matrix;
