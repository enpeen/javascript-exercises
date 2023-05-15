const reverseString = function(string) {
    let n = string.length;
    let result = "";

    for (let i = n; i > 0; i--) {
        result += string.slice(i - 1, i)
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
