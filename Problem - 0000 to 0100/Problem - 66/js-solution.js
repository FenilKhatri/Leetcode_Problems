let arr = [1,2,3];
let convretedString = arr.join('');
let addNumber = parseInt(convretedString) + 1;
let outputString = addNumber.toString();
let output = outputString.split('').map(Number);
console.log(output);