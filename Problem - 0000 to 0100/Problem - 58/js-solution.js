let sentence = "   fly me   to   the moon  "
let last_word;
let words = sentence.trim().split(" ");
for(let i=0; i<words.length; i++) {
    words[i] = words[i].toLowerCase();
    last_word = words[words.length - 1];
}
console.log(last_word.length);