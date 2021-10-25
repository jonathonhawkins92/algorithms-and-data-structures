import assert from "assert";

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, fn) {
  if (arr.length === 0) return false;
  if (fn(arr[0])) return true;

  return someRecursive(arr.slice(1), fn);
}

assert.equal(someRecursive([1, 2, 3, 4], isOdd), true);
assert.equal(someRecursive([4, 6, 8, 9], isOdd), true);
assert.equal(someRecursive([4, 6, 8], isOdd), false);
assert.equal(
  someRecursive([4, 6, 8], (val) => val > 10),
  false
);
