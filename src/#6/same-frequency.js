import assert from "assert";
import { time, createFrequency } from "../../helpers.js";

function sameFrequency(n1, n2) {
  const value1 = String(n1);
  const value2 = String(n2);

  if (value1.length !== value2.length) {
    return false;
  }

  const freq1 = createFrequency(value1);
  const freq2 = createFrequency(value2);

  for (const v of value1) {
    if (freq1[v] !== freq2[v]) {
      return false;
    }
  }
  return true;
}

time(() => {
  assert.equal(sameFrequency(182, 281), true);
  assert.equal(sameFrequency(34, 14), false);
  assert.equal(sameFrequency(3589578, 5879385), true);
  assert.equal(sameFrequency(22, 222), false);
});
