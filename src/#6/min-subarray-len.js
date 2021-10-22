import assert from "assert";
import { time } from "../../helpers.js";

// scan approach ended up being costly
function minSubArrayLen(data, target) {
  let position = 0;
  let startPosition = 0;
  let endPosition = 1;
  let value = 0;

  while (position <= data.length) {
    value += data[position];

    if (value >= target) {
      return endPosition;
    }

    if (position - startPosition < endPosition - 1) {
      // new array position
      position++;
    } else if (
      position < data.length - 1 &&
      position - startPosition < endPosition
    ) {
      // new start array position
      position = ++startPosition;
      value = 0;
    } else {
      // new endPosition
      endPosition++;
      position = 0;
      startPosition = 0;
      value = 0;
    }
  }
  return 0;
}

function answer(data, targetValue) {
  let currentValue = 0;
  let startPosition = 0;
  let endPosition = 0;
  let value = Infinity;

  while (startPosition < data.length) {
    if (data[startPosition] >= targetValue) {
      return 1;
    }
    // if current window doesn't add up to the given sum then
    // move the window to right
    else if (currentValue < targetValue && endPosition < data.length) {
      currentValue += data[endPosition];
      endPosition++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (currentValue >= targetValue) {
      value = Math.min(value, endPosition - startPosition);
      currentValue -= data[startPosition];
      startPosition++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return value === Infinity ? 0 : value;
}

time(() => {
  assert.equal(minSubArrayLen([2, 3, 1, 2, 4, 3, 1, 1, 1, 1], 7), 2, 0); // -> because [4, 3] is the smallest subarray
  assert.equal(minSubArrayLen([2, 1, 6, 5, 4], 9), 2, 1); // -> because [5, 4] is the smallest subarray
  assert.equal(minSubArrayLen([2, 5, 4, 1, 6], 9), 2, 1); // -> because [5, 4] is the smallest subarray
  assert.equal(
    minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52),
    1,
    2
  ); // -> because [62] is greater than 52
  assert.equal(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), 3, 3);
  assert.equal(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), 5, 4);
  assert.equal(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), 2, 5);
  assert.equal(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), 0, 6);
  assert.equal(minSubArrayLen([1, 2, 3, 4, 5, 6, 7], 28), 7, 7);
  assert.equal(
    minSubArrayLen(
      [
        1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3,
        4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6,
        7, 1, 2, 3, 4, 5, 6, 7,
      ],
      28
    ),
    7,
    7
  );
}, "Mine");

time(() => {
  assert.equal(answer([2, 3, 1, 2, 4, 3, 1, 1, 1, 1], 7), 2, 0); // -> because [4, 3] is the smallest subarray
  assert.equal(answer([2, 1, 6, 5, 4], 9), 2, 1); // -> because [5, 4] is the smallest subarray
  assert.equal(answer([2, 5, 4, 1, 6], 9), 2, 1); // -> because [5, 4] is the smallest subarray
  assert.equal(answer([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), 1, 2); // -> because [62] is greater than 52
  assert.equal(answer([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), 3, 3);
  assert.equal(answer([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), 5, 4);
  assert.equal(answer([4, 3, 3, 8, 1, 2, 3], 11), 2, 5);
  assert.equal(answer([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), 0, 6);
  assert.equal(answer([1, 2, 3, 4, 5, 6, 7], 28), 7, 7);
  assert.equal(
    answer(
      [
        1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3,
        4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6,
        7, 1, 2, 3, 4, 5, 6, 7,
      ],
      28
    ),
    7,
    7
  );
}, "Theirs");
