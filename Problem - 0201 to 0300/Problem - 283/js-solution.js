let nums = [0, 1, 0, 3, 12];
let sortedArr = nums.sort((a, b) => a - b);
for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === 0) {
        sortedArr.shift();
        sortedArr.push(0);
    }
}
console.log(sortedArr);