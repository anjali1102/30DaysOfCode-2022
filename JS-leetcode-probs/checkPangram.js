const string = "A quick brown fox jumps over the little lazy dog";

const checkPangram = (string) => {
  let alphabets = string.toLowerCase().split("");
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(alphabets[i]) < 0) {
      return false;
    }
  }
  return true;
};

console.log(checkPangram(string));
