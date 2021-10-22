import assert from "assert";
import { time, compareArray } from "../../helpers.js";

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

time(() => {
  assert.equal(
    compareArray(whileSumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]),
    true
  );
  assert.equal(whileSumZero([-2, 0, 1, 3]), undefined);
  assert.equal(compareArray(whileSumZero([-2, -1, 0, 1, 2, 3]), [-2, 2]), true);
  assert.equal(
    compareArray(whileSumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]),
    true
  );
  assert.equal(whileSumZero([1, 2, 3]), undefined);
  assert.equal(
    compareArray(whileSumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]),
    true
  );
});

time(() => {
  assert.equal(compareArray(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]), true);
  assert.equal(sumZero([-2, 0, 1, 3]), undefined);
  assert.equal(compareArray(sumZero([-2, -1, 0, 1, 2, 3]), [-2, 2]), true);
  assert.equal(
    compareArray(sumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]),
    true
  );
  assert.equal(sumZero([1, 2, 3]), undefined);
  assert.equal(
    compareArray(sumZero([-2, -1, 0, 1, 2, 3, 4, 5]), [-2, 2]),
    true
  );
  assert.equal(
    compareArray(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]), [-2, 2]),
    true
  );
});
