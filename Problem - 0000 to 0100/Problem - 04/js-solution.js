let a = [1,2, 1, 5];
let b = [3,4];
let c = a.concat(b);
let d = c.sort();
let arr = d.length;
let output;
if(arr % 2 == 0) {
    output =  (d[arr/2] + d[(arr/2) - 1]) / 2;
}
else {
    output = d[(arr/2) - 0.5];
}
console.log(output);