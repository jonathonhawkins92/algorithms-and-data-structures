import assert from "assert";
import { time } from "../../helpers.js";

function average(n1, n2) {
  return (n1 + n2) / 2;
}

function averagePair(arr, target) {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const ave = average(arr[left], arr[right]);
    if (ave === target) {
      return true;
    } else if (ave > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

time(() => {
  assert.equal(averagePair([1, 2, 3], 2.5), true);
  assert.equal(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), true);
  assert.equal(averagePair([-1, 0, 3, 4, 5, 6], 4.1), false);
  assert.equal(averagePair([], 4), false);
});

// Note the result isn't linked to the
// number of entries in the array, making
// the while loop the better solution

// [1, 3, 3, 5, 6, 7, 10, 12, 19];

// 1 + 19 / 2;
// 10 > 8;

// 1 + 12 / 2;
// 6.5 > 8;

// 3 + 12 / 2;
// 7.5 > 8;

// 3 + 12 / 2;
// 7.5 > 8;

// 5 + 12 / 2;
// 8.5 > 8;

// 5 + 10 / 2;
// 7.5 > 8;

// 6 + 10 / 2;
// 8 === 8;
