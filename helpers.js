import { performance } from "perf_hooks";

export const time = function (fn, name) {
  let t1 = performance.now();
  fn();
  let t2 = performance.now();
  const time = (t2 - t1) / 100;
  if (name) {
    console.log(`${name} ran in:	${time} seconds.`);
  } else {
    console.log(`Time Elapsed:	${time} seconds.`);
  }
};

export const compareObjects = function (arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

export const createFrequency = function (str) {
  const freq = {};
  for (const s of str) {
    freq[s] = (freq[s] || 0) + 1;
  }
  return freq;
};
