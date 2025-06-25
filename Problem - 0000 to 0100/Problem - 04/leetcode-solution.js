/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2);
    merged.sort((a, b) => a - b); // Numeric sort

    let len = merged.length;
    let median;

    if (len % 2 === 0) {
        median = (merged[len / 2] + merged[(len / 2) - 1]) / 2;
    } else {
        median = merged[Math.floor(len / 2)];
    }

    return median;
};