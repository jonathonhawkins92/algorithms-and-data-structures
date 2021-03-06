import assert from "assert";
import { time } from "../../helpers";

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += arr[i] || 0;
  }
  let current = result;
  for (let i = n; i < arr.length; i++) {
    const valueLeavingWindow = arr[i - n];
    const valueEnteringWindow = arr[i];
    current = current - valueLeavingWindow + valueEnteringWindow;
    result = Math.max(result, current);
  }
  return result;
}

time(() => {
  assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
  assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
  assert.equal(maxSubarraySum([4, 2, 1, 6], 1), 6);
  assert.equal(maxSubarraySum([4, 2, 1, 6, 4], 4), 13);
  assert.equal(maxSubarraySum([], 4), null);
});
