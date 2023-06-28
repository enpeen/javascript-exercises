const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
    let result;
    if (array.length ==  0) {
        result = 0;
        return result;
    } else {
        array.reduce(function(sum, value) {
        result = sum + value;
        return result;
        }, 0);
    }
    return result;
};

const multiply = function(array) {
    let result;
    array.reduce(function(sum, value) {
        result = sum * value;
        return result;
    });
    return result;
};

const power = function(a, b) {
    let result = a;
    if (b == 1) {
        return result;
    }
    for (let i = 2; i <= b; i++) {
        result = result * a;
    }
    console.log(result);
    return result;
};

const factorial = function(a) {
    let result = a;
    if (result == 0) {
        result = 1;
        return result;
    } else {
        for (let i = a - 1; i >= 2; i--) {
            result = result * i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
