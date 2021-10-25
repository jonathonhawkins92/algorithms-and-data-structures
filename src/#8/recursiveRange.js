import assert from "assert";

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(--num);
}

assert.equal(recursiveRange(6), 21);
assert.equal(recursiveRange(10), 55);
