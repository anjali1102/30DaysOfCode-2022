let string = "dvdf";
//[d,v,f, dv,df,vd,vf,vdf]
//output is 3

function lengthLongestSubstring() {
  let current_string = "",
    max = 0,
    pos;
  for (let i = 0; i < string.length; i++) {
    char = string.charAt(i);  //d
    // console.log("char", char);
    pos = current_string.indexOf(char); //"dv".indexOf("d")
    // console.log("pos", pos);
    if (pos !== -1) {
      //current_string += char;
      current_string = current_string.substr(pos + 1);  //"dv".substr(1)
    //   console.log("current_string", current_string);
    }

    // console.log("pos", pos);
    current_string += char;
    // console.log("current_string", current_string);
    max = Math.max(max, current_string.length);
    // console.log("max", max);
  }
  return max;
}

console.log(lengthLongestSubstring(string));
