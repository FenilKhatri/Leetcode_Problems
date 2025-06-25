const nums = [null, {}, 3];
let lastElement;

if (nums.length > 0) {
    lastElement = nums[nums.length - 1];
} else {
    lastElement = -1;
}
console.log(lastElement);