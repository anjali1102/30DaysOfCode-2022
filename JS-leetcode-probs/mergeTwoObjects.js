const obj1 = {
  name: "anjali chauhan",
  gender: "👧",
};

const obj2 = {
  name2: "ankush chauhan",
  gender2: "👶",
};

function mergeTwoObjects(a, b) {
  //   return { ...a,...b };
  let res = Object.assign(a, b); //Object.assign is built-in method in JS, merge 2 objects and return a new Object
  console.log(a);
  return res;
}
console.log(mergeTwoObjects(obj1, obj2));
