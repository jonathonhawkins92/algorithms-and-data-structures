const assert = require("assert");
const { time } = require("../../helpers");

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

time(() => assert.equal(validAnagram("bob", "bbo"), true));
time(() => assert.equal(validAnagram("bob", "boo"), false));
time(() => assert.equal(validAnagram("Conversation", "Voices rant on"), true));
time(() => assert.equal(validAnagram("Tar", "Rat"), true));
time(() => assert.equal(validAnagram("Arc", "Car"), true));
time(() => assert.equal(validAnagram("Elbow", "Below"), true));
time(() => assert.equal(validAnagram("State", "Taste"), true));
time(() => assert.equal(validAnagram("Cider", "Cried"), true));
time(() => assert.equal(validAnagram("Dusty", "Study"), true));
time(() => assert.equal(validAnagram("Night", "Thing"), true));
time(() => assert.equal(validAnagram("Inch", "Chin"), true));
time(() => assert.equal(validAnagram("Brag", "Grab"), true));
time(() => assert.equal(validAnagram("Cat", "Act"), true));
time(() => assert.equal(validAnagram("Bored", "Robed"), true));
time(() => assert.equal(validAnagram("Save", "Vase"), true));
time(() => assert.equal(validAnagram("Angel", "Glean"), true));
time(() => assert.equal(validAnagram("Stressed", "Desserts"), true));
time(() => assert.equal(validAnagram("Dormitory", "Dirty room"), true));
time(() => assert.equal(validAnagram("School master", "The classroom"), true));
time(() => assert.equal(validAnagram("Conversation", "Voices rant on"), true));
time(() => assert.equal(validAnagram("Listen", "Silent"), true));
time(() => assert.equal(validAnagram("Astronomer", "Moon starer"), true));
time(() => assert.equal(validAnagram("The eyes", "They see"), true));
time(() => assert.equal(validAnagram("A gentleman", "Elegant man"), true));
time(() => assert.equal(validAnagram("Funeral", "Real fun"), true));
time(() =>
  assert.equal(validAnagram("The Morse Code", "Here come dots"), true)
);
time(() =>
  assert.equal(validAnagram("Eleven plus two", "Twelve plus one"), true)
);
time(() =>
  assert.equal(validAnagram("Slot machines", "Cash lost in me"), true)
);
time(() => assert.equal(validAnagram("Fourth of July", "Joyful Fourth"), true));
