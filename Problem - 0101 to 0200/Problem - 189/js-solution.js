let nums = [-1,-100,3,99], k = 2, temp;

for(let i=0; i<k; i++) {
    temp = nums.pop();
    nums.unshift(temp);
}
console.log(nums);