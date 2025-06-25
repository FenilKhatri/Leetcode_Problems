let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
let convertedl1 = l1.slice().reverse().join('');
let convertedl2 = l2.slice().reverse().join('');
console.log(parseInt(convertedl1) + parseInt(convertedl2));