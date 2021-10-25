import assert from "assert";

function power(base, exponent) {
  if (exponent < 1) return 1;
  return base * power(base, --exponent);
}

assert.equal(power(2, 0), 1);
assert.equal(power(2, 2), 4);
assert.equal(power(2, 4), 16);
