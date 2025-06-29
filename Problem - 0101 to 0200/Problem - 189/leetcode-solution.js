/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    // Helper function to reverse a portion of the array
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    reverse(nums, 0, nums.length - 1);      // Reverse entire array
    reverse(nums, 0, k - 1);                // Reverse first k elements
    reverse(nums, k, nums.length - 1);      // Reverse the rest
};
let nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums); // Output: [3, 99, -1, -100]