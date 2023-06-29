const palindromes = function (string) {
    let result = false;               //try to optimize it a little, use replace method than turn into an array
    let array = string.split("");     
    for (let i = 0; i < array.length; i++) {
        if (array.includes("!") || array.includes(".")) {
            let start = array.indexOf("!");
            array.splice(start, 1);
        }
        if (array.includes(".")) {
            let start = array.indexOf(".");
            array.splice(start, 1);
        }
        if (array.includes(" ")) {
            let start = array.indexOf(" ");
            array.splice(start, 1);
        }
        if (array.includes(",")) {
            let start = array.indexOf(",");
            array.splice(start, 1);
        }
    }
    array = array.map(function(item) {
        return item.toLowerCase();
    });
    const arrayMapped = array.slice();
    const arrayReversed = arrayMapped.reverse();
    let counter = -1;
    for (let i = 0; i < array.length; i++) {
        if (arrayReversed[i] == array[i]) {
            counter++;
        }
    }
    if (counter == array.length - 1) {
            result = true;
        }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
