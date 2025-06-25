/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let low = -1e10, high = 1e10;

    // Function to count how many products are <= x
    const countLessEqual = (x) => {
        let count = 0;
        for (let i = 0; i < nums1.length; i++) {
            let a = nums1[i];
            if (a > 0) {
                // count j such that a * nums2[j] <= x -> nums2[j] <= x / a
                let l = 0, r = nums2.length;
                while (l < r) {
                    let m = Math.floor((l + r) / 2);
                    if (a * nums2[m] <= x) l = m + 1;
                    else r = m;
                }
                count += l;
            } else if (a < 0) {
                // count j such that a * nums2[j] <= x -> nums2[j] >= ceil(x / a)
                let l = 0, r = nums2.length;
                while (l < r) {
                    let m = Math.floor((l + r) / 2);
                    if (a * nums2[m] <= x) r = m;
                    else l = m + 1;
                }
                count += nums2.length - l;
            } else {
                // a == 0 -> product is 0, count all nums2[j] if x >= 0
                if (x >= 0) count += nums2.length;
            }
        }
        return count;
    };

    // Binary search on product value
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (countLessEqual(mid) < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};

// Example usage:
let nums1 = [-2, -1, 0, 1, 2];
let nums2 = [-3, -1, 2, 4, 5];
let k = 3;

console.log(kthSmallestProduct(nums1, nums2, k));