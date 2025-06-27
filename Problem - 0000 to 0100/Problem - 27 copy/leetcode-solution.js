/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // Index to place non-val elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // move valid element to front
            k++;
        }
    }

    return k; // New length of the array after removing val
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

let newLength = removeElement(nums, val);
