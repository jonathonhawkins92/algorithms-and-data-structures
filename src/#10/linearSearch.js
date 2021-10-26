import assert from "assert";
function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}

assert.equal(linearSearch([10, 15, 20, 25, 30], 15), 1);
assert.equal(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), 5);
assert.equal(linearSearch([100], 100), 0);
assert.equal(linearSearch([1, 2, 3, 4, 5], 6), -1);
assert.equal(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10), -1);
assert.equal(linearSearch([100], 200), -1);
