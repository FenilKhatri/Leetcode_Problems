const input = ["call", "call", "call"];
let arr = [];
let bool = false;
let n = 10;

for (let i = 0; i < input.length; i++) {
    if (input[i] === "call" && bool === false) {
        arr.push(n);
        bool = true;
    } else if (input[i] === "call" && bool === true) {
        n = n + 1;
        arr.push(n);
    } else {
        bool = false;
    }
}

console.log(arr);