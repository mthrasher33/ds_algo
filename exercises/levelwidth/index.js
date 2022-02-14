// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const stopper = 's';
  let agg = [root, stopper];
  let counters = [0];

  while (agg.length > 1) {
    const node = agg.shift(); // return first element of array
    if (node === stopper) {
      agg.push(stopper); // add the stopper to back
      counters.push(0); // add new counter variable
    } else {
      agg.push(...node.children); // add the nodes children
      counters[counters.length - 1]++; // add to the last counter
    }
  }
  return counters;
}

module.exports = levelWidth;
