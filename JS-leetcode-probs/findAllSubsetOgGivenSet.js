const nums = [1, 2, 3];
// output = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];

var subsets = function (nums) {
  let subsets = [[]];
  for (let i = 0; i < nums.length; i++) {
    let length = subsets.length; //1
    for (let j = 0; j < length; j++) {
      //console.log("subsets[j]", j, subsets[j]);
      subsets.push([...subsets[j], nums[i]]);
      //console.log("subsets", subsets);
    }
  }
  return subsets;
};

console.log(subsets(nums));
