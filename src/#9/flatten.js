import assert from "assert";
import { compareObjects } from "../../helpers.js";

function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

assert.equal(compareObjects(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]), true);
assert.equal(
  compareObjects(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]),
  true
);
assert.equal(compareObjects(flatten([[1], [2], [3]]), [1, 2, 3]), true);
assert.equal(
  compareObjects(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), [1, 2, 3]),
  true
);
