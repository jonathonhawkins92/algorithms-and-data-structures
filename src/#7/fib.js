import assert from "assert";

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

assert.equal(fib(4), 3);
assert.equal(fib(10), 55);
assert.equal(fib(28), 317811);
assert.equal(fib(35), 9227465);
