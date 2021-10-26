import assert from "assert";

function naiveStringSearch(str, target) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      // miss match
      if (target[j] !== str[i + j]) break;
      // at the end of target
      if (j === target.length - 1) result++;
    }
  }
  return result;
}

assert.equal(naiveStringSearch("lorie lolged", "lo"), 2);
assert.equal(naiveStringSearch("abcdefggggg", "ggg"), 3);
