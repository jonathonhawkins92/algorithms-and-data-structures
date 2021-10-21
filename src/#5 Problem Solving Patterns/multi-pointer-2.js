const { performance } = require("perf_hooks");
const assert = require("assert");

function countUniqueValues(arr) {
  let result = {};
  for (const entry of arr) {
    result[entry] = true;
  }
  return Object.keys(result).length;
}
function twoPointerCountUniqueValues(arr) {
  let i = 0;
  if (arr.length === 0) {
    return i;
  }
  for (let index = 1; index < arr.length; index++) {
    if (arr[i] === arr[index]) {
      continue;
    }
    i++;
    arr[i] = arr[index];
  }
  return i + 1;
}

function result(t1, t2) {
  const time = (t2 - t1) / 100;
  console.log(`Time Elapsed: ${time} seconds.`);
}

{
  let t1 = performance.now();
  assert.equal(countUniqueValues([1, 1, 1, 1, 1, 2]), 2);
  assert.equal(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]), 7);
  assert.equal(countUniqueValues([]), 0);
  assert.equal(countUniqueValues([-2, -1, -1, 0, 1]), 4);
  let t2 = performance.now();
  result(t1, t2);
}
{
  let t1 = performance.now();
  assert.equal(twoPointerCountUniqueValues([1, 1, 1, 1, 1, 2]), 2);
  assert.equal(
    twoPointerCountUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]),
    7
  );
  assert.equal(twoPointerCountUniqueValues([]), 0);
  assert.equal(twoPointerCountUniqueValues([-2, -1, -1, 0, 1]), 4);
  let t2 = performance.now();
  result(t1, t2);
}

console.log("--- Victory 🎉 ---");
