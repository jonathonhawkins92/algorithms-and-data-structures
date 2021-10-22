import assert from "assert";
import { time } from "../../helpers.js";

function maxSubarraySum(arr, window) {
  if (arr.length <= window) return null;
  let result = 0;
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    const valueLeavingWindow = arr[i - window] || 0;
    const valueEnteringWindow = arr[i];
    current = current - valueLeavingWindow + valueEnteringWindow;
    result = Math.max(result, current);
  }
  return result;
}

time(() => {
  assert.equal(maxSubarraySum([100, 200, 300, 400], 2), 700, "number: 0");
  assert.equal(
    maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
    39,
    "number: 1"
  );
  assert.equal(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), 5, "number: 2");
  assert.equal(
    maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2),
    5,
    "number: 3"
  );
  assert.equal(maxSubarraySum([2, 3], 3), null, "number: 4");
});
