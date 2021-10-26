import assert from "assert";
import { compareObjects } from "../../helpers.js";

function capitalizeFirst(arr) {
  if (arr.length === 0) return arr;
  const values = arr[0].split("");
  arr[0] = [values[0].toUpperCase(), ...values.slice(1)];
  return [arr[0].join(""), ...capitalizeFirst(arr.slice(1))];
}

assert.equal(
  compareObjects(capitalizeFirst(["car", "taco", "banana"]), [
    "Car",
    "Taco",
    "Banana",
  ]),
  true
);
