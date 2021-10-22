import assert from "assert";
import { time } from "../../helpers.js";

function isSubsequence(str1, str2) {
  if (!str1) return true;
  var i = 0;
  for (const v2 of str2) {
    if (v2 === str1[i]) i++;
    if (i === str1.length) return true;
  }
  return false;
}

time(() => {
  assert.equal(isSubsequence("hello", "hello world"), true, "number: 0");
  assert.equal(isSubsequence("sing", "sting"), true, "number: 1");
  assert.equal(isSubsequence("abc", "abracadabra"), true, "number: 2");
  assert.equal(isSubsequence("abc", "acb"), false, "number: 3");
});
