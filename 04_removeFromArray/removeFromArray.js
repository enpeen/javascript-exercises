const removeFromArray = function(array, ...args) {
    for (let arg of args) {
        if (array.includes(arg)) {
            let itemIndex = array.indexOf(arg);
            delete array[itemIndex];
        }
    }
    
    let arrayFiltered = array.filter(function(member) {
        if (member != undefined) {
            return member;
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
