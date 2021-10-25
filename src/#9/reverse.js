import assert from "assert";

function reverse(str) {
  if (!str) return str;
  return reverse(str.slice(1)) + str[0];
}

assert.equal(reverse("awesome"), "emosewa");
assert.equal(reverse("rithmschool"), "loohcsmhtir");
