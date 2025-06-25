let num = 13;
let remainder, n = num, temp = 0;

while(num > 0) {
    remainder = num % 10;
    temp = (temp * 10) + remainder;
    num = Math.floor(num / 10);
}

if (temp === n) {
    console.log("The number is a palindrome");
}
else {
    console.log("The number is not a palindrome");
}