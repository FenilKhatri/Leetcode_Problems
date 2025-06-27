let nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2, count = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
        nums[i] = '_';
        count++;
    }
}

let sorted = nums.sort();
// console.log(nums, (nums.length - count));
console.log(sorted);