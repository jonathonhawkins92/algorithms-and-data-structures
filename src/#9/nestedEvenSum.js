import assert from "assert";

function nestedEvenSum(obj) {
  let result = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === "number" && value % 2 === 0) {
      result += value;
    }
    if (typeof value === "object") {
      result += nestedEvenSum(value);
    }
  }
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

assert.equal(nestedEvenSum(obj1), 6);
assert.equal(nestedEvenSum(obj2), 10);
