const assert = require("assert");

function freq(str) {
  const freq = {};
  for (const s of str) {
    freq[s] = (freq[s] || 0) + 1;
  }
  return freq;
}

function validAnagram(str1, str2) {
  const value1 = str1.replace(/ /g, "").toLowerCase();
  const value2 = str2.replace(/ /g, "").toLowerCase();

  if (value1.length !== value2.length) {
    return false;
  }

  const freq1 = freq(value1);
  const freq2 = freq(value2);

  for (const v of value1) {
    if (freq1[v] !== freq2[v]) {
      return false;
    }
  }
  return true;
}

assert.equal(validAnagram("bob", "bbo"), true);
assert.equal(validAnagram("bob", "boo"), false);
assert.equal(validAnagram("Conversation", "Voices rant on"), true);
assert.equal(validAnagram("Tar", "Rat"), true);
assert.equal(validAnagram("Arc", "Car"), true);
assert.equal(validAnagram("Elbow", "Below"), true);
assert.equal(validAnagram("State", "Taste"), true);
assert.equal(validAnagram("Cider", "Cried"), true);
assert.equal(validAnagram("Dusty", "Study"), true);
assert.equal(validAnagram("Night", "Thing"), true);
assert.equal(validAnagram("Inch", "Chin"), true);
assert.equal(validAnagram("Brag", "Grab"), true);
assert.equal(validAnagram("Cat", "Act"), true);
assert.equal(validAnagram("Bored", "Robed"), true);
assert.equal(validAnagram("Save", "Vase"), true);
assert.equal(validAnagram("Angel", "Glean"), true);
assert.equal(validAnagram("Stressed", "Desserts"), true);
assert.equal(validAnagram("Dormitory", "Dirty room"), true);
assert.equal(validAnagram("School master", "The classroom"), true);
assert.equal(validAnagram("Conversation", "Voices rant on"), true);
assert.equal(validAnagram("Listen", "Silent"), true);
assert.equal(validAnagram("Astronomer", "Moon starer"), true);
assert.equal(validAnagram("The eyes", "They see"), true);
assert.equal(validAnagram("A gentleman", "Elegant man"), true);
assert.equal(validAnagram("Funeral", "Real fun"), true);
assert.equal(validAnagram("The Morse Code", "Here come dots"), true);
assert.equal(validAnagram("Eleven plus two", "Twelve plus one"), true);
assert.equal(validAnagram("Slot machines", "Cash lost in me"), true);
assert.equal(validAnagram("Fourth of July", "Joyful Fourth"), true);
console.log("--- Victory 🎉 ---");
