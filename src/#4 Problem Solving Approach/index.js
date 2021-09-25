// function toAlphanumeric(str: string): string
function toAlphanumeric(str) {
  return str.replace(/[^a-z0-9]/gi, "");
}

// function charCount(str: string, { lower?: boolean, toAlphanumeric?: boolean }): Record<string, number>
function charCount(
  str,
  { isLowerCase = false, isOnlyAlphanumeric = false } = {}
) {
  // create output
  const output = {};
  // remove non alphanumeric values
  let input = isOnlyAlphanumeric ? toAlphanumeric(input) : input;
  // to lower
  input = isLowerCase ? str.toLowerCase() : str;
  // loop over each string
  for (const char of input) {
    // if there ins't a string initialize it
    if (!output[char]) {
      output[char] = 1;
      // continue to the next entry
      continue;
    }
    // add to existing value
    output[char] += 1;
  }
  // return
  return output;
} // 0(n)

console.log(charCount("hello", { isLowerCase: true }));


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}