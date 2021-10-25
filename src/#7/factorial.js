import assert from "assert";

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(--num);
}

assert.equal(factorial(1), 1);
assert.equal(factorial(2), 2);
assert.equal(factorial(4), 24);
assert.equal(factorial(7), 5040);
