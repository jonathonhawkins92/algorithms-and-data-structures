const { performance } = require("perf_hooks");
const assert = require("assert");

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

function result(t1, t2) {
  const time = (t2 - t1) / 100;
  console.log(`Time Elapsed: ${time} seconds.`);
}

{
  let t1 = performance.now();
  assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
  assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
  assert.equal(maxSubarraySum([4, 2, 1, 6], 1), 6);
  assert.equal(maxSubarraySum([4, 2, 1, 6, 4], 4), 13);
  assert.equal(maxSubarraySum([], 4), null);
  let t2 = performance.now();
  result(t1, t2);
}

console.log("--- Victory 🎉 ---");
