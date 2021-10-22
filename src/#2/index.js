import { performance } from "perf_hooks";

function addUpTo(n) {
  let total = 0;
  for (let index = 0; index < n; index++) {
    total += index;
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

function result(t1, t2) {
  const time = (t2 - t1) / 100;
  console.log(`Time Elapsed: ${time} seconds.`);
}

const value = 1_000_000_000;
{
  let t1 = performance.now();
  addUpTo(value);
  let t2 = performance.now();
  result(t1, t2);
}

{
  let t1 = performance.now();
  addUpTo2(value);
  let t2 = performance.now();
  result(t1, t2);
}
