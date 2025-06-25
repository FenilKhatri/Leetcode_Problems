var plusOne = function(digits) {
    let convertedString = digits.join('');
    let addNumber = BigInt(convertedString) + 1n;
    let outputString = addNumber.toString();
    let output = outputString.split('').map(Number);
    return output;
};