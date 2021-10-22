const assert = require("assert");
const { time } = require("../../helpers");

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

time(() => {
  assert.equal(countUniqueValues([1, 1, 1, 1, 1, 2]), 2);
  assert.equal(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]), 7);
  assert.equal(countUniqueValues([]), 0);
  assert.equal(countUniqueValues([-2, -1, -1, 0, 1]), 4);
});
time(() => {
  assert.equal(twoPointerCountUniqueValues([1, 1, 1, 1, 1, 2]), 2);
  assert.equal(
    twoPointerCountUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]),
    7
  );
  assert.equal(twoPointerCountUniqueValues([]), 0);
  assert.equal(twoPointerCountUniqueValues([-2, -1, -1, 0, 1]), 4);
});
