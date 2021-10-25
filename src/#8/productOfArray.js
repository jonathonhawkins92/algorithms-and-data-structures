import assert from "assert";

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

assert.equal(productOfArray([1, 2, 3]), 6);
assert.equal(productOfArray([1, 2, 3, 10]), 60);
