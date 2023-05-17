const sumAll = function(x, y) {
    let result = 0;
    if ((x < 0 || typeof(x) != "number") || (y < 0 || typeof(y) != "number")) {
        result = "ERROR";
    } else if (x < y) {
        for (let i = x; i <= y; i++) {
            result += i;
        }
    } else if (x > y) {
        for (let i = y; i <= x; i++) {
            result += i;
        }
    } 
    return result;
};

// Do not edit below this line
module.exports = sumAll;
