var createCounter = function(input) {
    let bool = false;
    let n = 1;
    let i = 0;

    return function() {
        if (i >= input.length) return null; // End of input
        let result = null;

        if (input[i] === "call" && bool === false) {
            result = n;
            bool = true;
        } else if (input[i] === "call" && bool === true) {
            n++;
            result = n;
        } else {
            bool = false;
        }

        i++;
        return result;
    };
};

 var createCounter = function(n) {
    return function() {
        return n++;
    };
};