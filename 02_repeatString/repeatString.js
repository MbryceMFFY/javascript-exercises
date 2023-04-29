const repeatString = function(word, times) {
    let finalWord = "";
    for (i = 0; i < times; i++) {
        finalWord += word;
    }
    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
