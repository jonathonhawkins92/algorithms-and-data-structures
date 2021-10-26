import assert from "assert";
import { compareObjects } from "../../helpers.js";

function collectStrings(input) {
  let result = [];
  (function helper(obj) {
    for (const value of Object.values(obj)) {
      if (typeof value === "string") {
        result.push(value);
      } else if (!Array.isArray(value) && typeof value === "object") {
        helper(value);
      }
    }
  })(input);
  return result;
}

assert.equal(
  compareObjects(
    collectStrings({
      stuff: "foo",
      data: {
        val: {
          thing: {
            info: "bar",
            moreInfo: {
              evenMoreInfo: {
                weMadeIt: "baz",
              },
            },
          },
        },
      },
    }),
    ["foo", "bar", "baz"]
  ),
  true
);
