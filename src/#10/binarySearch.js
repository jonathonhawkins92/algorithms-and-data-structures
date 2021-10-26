import assert from "assert";

function binarySearch(array, target) {
  if (array.length === 0) return -1;
  let left = 0;
  let right = array.length - 1;
  while (left !== right) {
    const middle = Math.round((left + right) / 2);
    const value = array[middle];
    if (value === target) {
      return middle;
    } else if (value < target) {
      left = middle;
    } else if (value > target) {
      right = middle;
    }
  }
  return -1;
}

assert.equal(binarySearch([1, 2, 3, 4, 5], 2), 1);
assert.equal(binarySearch([1, 2, 3, 4, 5], 3), 2);
assert.equal(binarySearch([1, 2, 3, 4, 5], 5), 4);
assert.equal(binarySearch([1, 2, 3, 4, 5], 6), -1);
assert.equal(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  ),
  2
);
assert.equal(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  ),
  16
);
assert.equal(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  ),
  -1
);
