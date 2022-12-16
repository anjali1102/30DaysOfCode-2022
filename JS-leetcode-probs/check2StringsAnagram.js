var firstString = "mary";
var secondString = "army";

function isAnagram(a, b) {
  var a = firstString.split("").sort().join("");
  var b = secondString.split("").sort().join("");
  console.log(a, b);
  return a === b;
}

console.log(isAnagram(firstString, secondString));
