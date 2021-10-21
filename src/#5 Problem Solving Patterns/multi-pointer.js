const { performance } = require("perf_hooks");
const assert = require("assert");

function sumZero(arr) {
  const lookup = {};
  for (const entry of arr) {
    lookup[entry] = true;
  }
  for (const entry of arr) {
    if (entry < 0) {
      const inverseEntry = entry * -1;
      if (lookup[inverseEntry]) {
        return [entry, inverseEntry];
      }
    }
  }
}

function whileSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function compareArr(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function result(t1, t2) {
  const time = (t2 - t1) / 100;
  console.log(`Time Elapsed: ${time} seconds.`);
}

{
  let t1 = performance.now();
  assert.equal(
    compareArr(whileSumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]),
    true
  );
  assert.equal(whileSumZero([-2, 0, 1, 3]), undefined);
  assert.equal(compareArr(whileSumZero([-2, -1, 0, 1, 2, 3]), [-2, 2]), true);
  assert.equal(
    compareArr(whileSumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]),
    true
  );
  assert.equal(whileSumZero([1, 2, 3]), undefined);
  assert.equal(
    compareArr(whileSumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]),
    true
  );
  let t2 = performance.now();
  result(t1, t2);
}
{
  let t1 = performance.now();
  assert.equal(compareArr(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]), true);
  assert.equal(sumZero([-2, 0, 1, 3]), undefined);
  assert.equal(compareArr(sumZero([-2, -1, 0, 1, 2, 3]), [-2, 2]), true);
  assert.equal(compareArr(sumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]), true);
  assert.equal(sumZero([1, 2, 3]), undefined);
  assert.equal(compareArr(sumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]), true);
  assert.equal(
    compareArr(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]), [-2, 2]),
    true
  );
  let t2 = performance.now();
  result(t1, t2);
}

console.log("--- Victory 🎉 ---");
