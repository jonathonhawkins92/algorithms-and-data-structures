import assert from "assert";

// https://www.youtube.com/watch?v=4jY57Ehc14Y

// O(m)
function computeLSPArray(pat) {
  const result = new Array(pat.length);

  let position = 0;
  let index = 1;
  result[0] = 0;
  while (index < pat.length) {
    if (pat[index] === pat[position]) {
      position++;
      result[index] = position;
      index++;
    } else if (position !== 0) {
      position = result[position - 1];
    } else {
      result[index] = 0;
      index++;
    }
  }
  return result;
}

// O(n)
function KMP(txt, pat) {
  let result = 0;
  const txtLen = txt.length;
  const patLen = pat.length;
  const lps = computeLSPArray(pat);
  let txtIndex = 0;
  let patIndex = 0;
  while (txtIndex < txtLen) {
    if (txt[txtIndex] === pat[patIndex]) {
      txtIndex++;
      patIndex++;
    } else if (patIndex !== 0) {
      patIndex = lps[patIndex - 1];
    } else {
      txtIndex++;
    }
    if (patIndex === patLen) {
      result++;
      // resetting patIndex to loop for future matches
      patIndex = lps[patIndex - 1];
    }
  }
  return result;
}

assert.equal(KMP("onionionspl", "onions"), 1);
assert.equal(KMP("lorie lolged", "lo"), 2);
assert.equal(KMP("abcdefggggg", "ggg"), 3);

// "onionionspl"
// "onions"
//  000120
