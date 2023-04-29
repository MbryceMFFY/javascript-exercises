const reverseString = function(word) {
    let currentWord = word;
    let newWord = "";
    let wordLength = word.length;
    for (i = wordLength; i >= 0; i--) {
        newWord += currentWord.charAt(i);
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
