import assert from "assert";
import { compareObjects } from "../../helpers.js";

function capitalizeWords(arr) {
  if (arr.length === 0) return arr;
  return [arr[0].toUpperCase(""), ...capitalizeWords(arr.slice(1))];
}

assert.equal(
  compareObjects(capitalizeWords(["i", "am", "learning", "recursion"]), [
    "I",
    "AM",
    "LEARNING",
    "RECURSION",
  ]),
  true
);
