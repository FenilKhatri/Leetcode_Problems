let nums = [1,2,3,4,5], j, k, bool = false;
for(let i=0; i<nums.length - 2; i++) {
    j = i + 1;
    k = j + 1;
    if(nums[i] < nums[j] && nums[j] < nums[k]) {
        bool = true;
    } 
    else {
        bool = false;
        break;
    }
}
console.log(bool);