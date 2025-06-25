var lengthOfLastWord = function(s) {
    let words = s.trim().split(/\s+/); 
    let lastWord = words[words.length - 1];
    return lastWord.length;
};