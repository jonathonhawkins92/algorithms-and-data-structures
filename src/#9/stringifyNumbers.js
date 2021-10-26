import assert from "assert";
import { compareObjects } from "../../helpers.js";

function stringifyNumbers(obj) {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      result[key] = String(value);
    } else if (!Array.isArray(value) && typeof value === "object") {
      result[key] = stringifyNumbers(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

assert.equal(
  compareObjects(
    stringifyNumbers({
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66,
        },
      },
    }),
    {
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66",
        },
      },
    }
  ),
  true
);
