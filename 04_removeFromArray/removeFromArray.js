const removeFromArray = function(array, ...args) {
    let argsArrayed = Array.from(args);

    for (let argArrayed of argsArrayed) {
        if (array.includes(argArrayed)) {
            let itemIndex = array.indexOf(argArrayed);
            delete array[itemIndex];
        }
    }
    
    arrayFiltered = array.filter(function(number) {
        if (number != undefined) {
            return number;
        };
    });

    return arrayFiltered;
};

/*
const removeFromArray = function(array, number1, number2) {
    if (number1 != null && array.includes(number1)) {
        array.splice(number1 - 1, 1);
    }
    if (number2 != null && array.includes(number2)) {
        array.splice(number2 - 1, 1);
    }
    return array;
};
*/

// Do not edit below this line
module.exports = removeFromArray;
