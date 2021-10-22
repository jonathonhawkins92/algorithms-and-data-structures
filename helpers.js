const { performance } = require("perf_hooks");

module.exports.time = function (fn) {
  let t1 = performance.now();
  fn();
  let t2 = performance.now();
  const time = (t2 - t1) / 100;
  console.log(`Time Elapsed: ${time} seconds.`);
};

module.exports.compareArray = function (arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
