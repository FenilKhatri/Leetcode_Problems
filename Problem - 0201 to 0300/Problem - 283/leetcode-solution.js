/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    // Fill the rest with zeros
    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex++] = 0;
    }
};
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);