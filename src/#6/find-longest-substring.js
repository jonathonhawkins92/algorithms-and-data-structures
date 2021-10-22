import assert from "assert";
import { time } from "../../helpers.js";

/**
 * Sliding Window - findLongestSubstring
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the longest substring with all distinct characters.
 * */
function findLongestSubstring(value) {
  if (value.length === 0) return 0;

  let start = 0;
  let result = 0;
  const found = {};

  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (found[char]) {
      start = Math.max(start, found[char]);
    }
    result = Math.max(result, i - start + 1);
    found[char] = i + 1;
  }
  return result;
}

time(() => {
  assert.equal(findLongestSubstring(""), 0);
  assert.equal(findLongestSubstring("rithmschool"), 7);
  //   assert.equal(findLongestSubstring("thisisawesome"), 6);
  //   assert.equal(findLongestSubstring("thecatinthehat"), 7);
  //   assert.equal(findLongestSubstring("bbbbbb"), 1);
  //   assert.equal(findLongestSubstring("longestsubstring"), 8);
  //   assert.equal(findLongestSubstring("thisishowwedoit"), 6);
});
