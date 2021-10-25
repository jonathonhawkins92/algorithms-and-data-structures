import assert from "assert";

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

assert.equal(isPalindrome("awesome"), false);
assert.equal(isPalindrome("foobar"), false);
assert.equal(isPalindrome("tacocat"), true);
assert.equal(isPalindrome("amanaplanacanalpanama"), true);
assert.equal(isPalindrome("amanaplanacanalpandemonium"), false);
