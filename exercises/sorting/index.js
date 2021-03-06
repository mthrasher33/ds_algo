// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
const arr = [5, 9, 0, 100, 3];

function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      tempVal = arr[j + 1];
      if (arr[j + 1] < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = tempVal;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
