let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2, 5, 6], n = 3;
let nums1Sorted = [];

function sorted(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) { }
        else {
            nums1Sorted.push(nums[i]);
        }
    }
}
sorted(nums1);
sorted(nums2);
let result = nums1Sorted.sort();
console.log(result);